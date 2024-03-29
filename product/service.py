from decimal import Decimal
from django.conf import settings
from .models import TFTs, GamingPC, Laptops, Accessories, ComputerParts, GraphicsCard
from .serializers import TFTsSerializer,GamingPCSerializer, GraphicsCardSerializer, LaptopsSerializer, AccessoriesSerializer,ComputerPartsSerializer

class CartService:
    def __init__(self, request):
        self.session = request.session
        cart = self.session.get(settings.CART_SESSION_ID)
        if not cart:
            cart ={}
        self.cart = cart

    def save(self):
        self.session[settings.CART_SESSION_ID]= self.cart
        self.session.modified =True

    def add_item(self, item_type, item_id, quantity=1):
        item_id_str = str(item_id)
        if item_id_str not in self.cart:
            self.cart[item_id_str]= {'type': item_type, "quantity":0, "details": {}}

        item = None
        if item_type == "tfts":
            item = TFTs.objects.get(id=item_id)
        elif item_type == "gamingpc":
            item = GamingPC.objects.get(id=item_id)
        elif item_type == "graphicscard":
            item = GraphicsCard.objects.get(id=item_id)
        elif item_type == "laptops":
            item = Laptops.objects.get(id=item_id)
        elif item_type == "accessories":
            item = Accessories.objects.get(id=item_id)
        elif item_type == "computerparts":
            item = ComputerParts.objects.get(id=item_id)

        if item:
            serializer = self.get_serializer(item_type, item)
            self.cart[item_id_str]["details"] = serializer.data
            self.cart[item_id_str]["quantity"] += quantity

        self.save()

    def remove_item(self, item_id):
        item_id_str = str(item_id)
        if item_id_str in self.cart:
            del self.cart[item_id_str]
            self.save()

    def get_serializer(self, item_type, item):
        if item_type == "tfts":
            return TFTsSerializer(item)
        elif item_type == "gamingpc":
            return GamingPCSerializer(item)
        elif item_type == "graphicscard":
            return GraphicsCardSerializer(item)
        elif item_type == "laptops":
            return LaptopsSerializer(item)
        elif item_type == "accessories":
            return AccessoriesSerializer(item)
        elif item_type == "computerparts":
            return ComputerPartsSerializer(item)
        
    def get_total_price(self):
        total = Decimal('0')
        for item_id, data in self.cart.items():
            total += Decimal(data["details"]["price"]) * data["quantity"]
        return total

    def get_cart_details(self):
        cart_details = {}
        for item_id, data in self.cart.items():
            item_type = data["type"]
            if item_type not in cart_details:
                cart_details[item_type] = []
            item_details = data["details"]
            item_details["quantity"] = data["quantity"]
            cart_details[item_type].append(item_details)
        return cart_details

    def clear_cart(self):
        self.session[settings.CART_SESSION_ID] = {}
        self.save()