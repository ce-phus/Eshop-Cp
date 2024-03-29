from django.shortcuts import render
from .models import TFTs, GamingPC, GraphicsCard, Laptops, Accessories, ComputerParts

from rest_framework import status
from rest_framework.views import APIView
from .serializers import TFTsSerializer, GamingPCSerializer, GraphicsCardSerializer, LaptopsSerializer, AccessoriesSerializer,ComputerPartsSerializer
from rest_framework.response import Response
from rest_framework import permissions
from .service import CartService

class TFTsView(APIView):
    def get(self, request):
        tfts = TFTs.objects.all()
        serializer = TFTsSerializer(tfts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class TFTsDetailView(APIView):
    def get(self, request, pk):
        try:
            tft = TFTs.objects.all(id=pk)
            serializer = TFTsSerializer(tft)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except TFTs.DoesNotExist:
            return Response({"detail": "TFT not found"}, status=status.HTTP_404_NOT_FOUND)
        
class TFTsCreateView(APIView):
    permission_classes=[permissions.IsAdminUser]
    def post(self, request):
        user= request.user
        data= request.data

        tft = {
            "name": data["name"],
            "description": data["description"],
            "price": data["price"],
            "stock": data["stock"],
            "image": data["image"],
        }
        serializer = TFTsSerializer(data=tft, many=False)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"detail": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        
class TFTDeleteView(APIView):
    permission_classes=[permissions.IsAdminUser]

    def delete(self, request, pk):
        try:
            tft = TFTs.objects.get(id=pk)
            tft.delete()
            return Response({"detail": "TFT successfully deleted"}, status=status.HTTP_204_NO_CONTENT)
        except:
            return Response({"detail": "Not Found."}, status=status.HTTP_404_NOT_FOUND)

class TFTEditView(APIView):
    permission_classes= [permissions.IsAdminUser]

    def put(self, request, pk):
        data= request.data
        tft = TFTs.objects.get(id=pk)

        updated_tft= {
            "name": data["name"] if data["name"] else tft.name,
            "description": data["description"] if data["description"] else tft.description,
            "price": data["price"] if data["price"] else tft.price,
            "stock": data["stock"],
            "image": data["image"] if data["image"] else tft.image,
        }
        serializer = TFTsSerializer(tft, data=updated_tft)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"detail": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        

class GamingPCView(APIView):
    def get(self, request):
        tfts = GamingPC.objects.all()
        serializer = GamingPC(tfts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class GamingPCDetailView(APIView):
    def get(self, request, pk):
        try:
            tft = GamingPC.objects.all(id=pk)
            serializer = GamingPCSerializer(tft)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except TFTs.DoesNotExist:
            return Response({"detail": "TFT not found"}, status=status.HTTP_404_NOT_FOUND)
        
class GamingPCCreateView(APIView):
    permission_classes=[permissions.IsAdminUser]
    def post(self, request):
        user= request.user
        data= request.data

        gamingpc = {
            "name": data["name"],
            "description": data["description"],
            "price": data["price"],
            "stock": data["stock"],
            "image": data["image"],
        }
        serializer = GamingPCSerializer(data=gamingpc, many=False)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"detail": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        
class GamingPCDeleteView(APIView):
    permission_classes=[permissions.IsAdminUser]

    def delete(self, request, pk):
        try:
            gamingpc = GamingPC.objects.get(id=pk)
            gamingpc.delete()
            return Response({"detail": "Gaming Pc successfully deleted"}, status=status.HTTP_204_NO_CONTENT)
        except:
            return Response({"detail": "Not Found."}, status=status.HTTP_404_NOT_FOUND)
        
class GamingPCEditView(APIView):
    permission_classes= [permissions.IsAdminUser]

    def put(self, request, pk):
        data= request.data
        gamingpc = GamingPC.objects.get(id=pk)

        updated_tft= {
            "name": data["name"] if data["name"] else gamingpc.name,
            "description": data["description"] if data["description"] else gamingpc.description,
            "price": data["price"] if data["price"] else gamingpc.price,
            "stock": data["stock"],
            "image": data["image"] if data["image"] else gamingpc.image,
        }
        serializer = GamingPCSerializer(gamingpc, data=updated_tft)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"detail": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        
class GraphicsCardView(APIView):
    def get(self, request):
        tfts = GraphicsCard.objects.all()
        serializer = GraphicsCardSerializer(tfts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class GraphicsCardDetailView(APIView):
    def get(self, request, pk):
        try:
            tft = GraphicsCard.objects.all(id=pk)
            serializer = GraphicsCardSerializer(tft)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except TFTs.DoesNotExist:
            return Response({"detail": "Graphic card not found"}, status=status.HTTP_404_NOT_FOUND)

class GraphicsCardCreateView(APIView):
    permission_classes=[permissions.IsAdminUser]
    def post(self, request):
        user= request.user
        data= request.data

        graphicscard = {
            "name": data["name"],
            "description": data["description"],
            "price": data["price"],
            "stock": data["stock"],
            "image": data["image"],
        }
        serializer = TFTsSerializer(data=graphicscard, many=False)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"detail": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        
class GraphicsCardDeleteView(APIView):
    permission_classes=[permissions.IsAdminUser]

    def delete(self, request, pk):
        try:
            graphicscard = GraphicsCard.objects.get(id=pk)
            graphicscard.delete()
            return Response({"detail": "Graphics Card successfully deleted"}, status=status.HTTP_204_NO_CONTENT)
        except:
            return Response({"detail": "Not Found."}, status=status.HTTP_404_NOT_FOUND)

class GraphicsCardEditView(APIView):
    permission_classes= [permissions.IsAdminUser]

    def put(self, request, pk):
        data= request.data
        graphics = GraphicsCard.objects.get(id=pk)

        updated_graphics= {
            "name": data["name"] if data["name"] else graphics.name,
            "description": data["description"] if data["description"] else graphics.description,
            "price": data["price"] if data["price"] else graphics.price,
            "stock": data["stock"],
            "image": data["image"] if data["image"] else graphics.image,
        }
        serializer = GraphicsCardSerializer(graphics, data=updated_graphics)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"detail": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

class LaptopView(APIView):
    def get(self, request):
        laptops= Laptops.objects.all()
        serializer = LaptopsSerializer(laptops, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class LaptopDetailView(APIView):
    def get(self, request, pk):
        try:
            laptop = Laptops.objects.all(id=pk)
            serializer = LaptopsSerializer(laptop)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except TFTs.DoesNotExist:
            return Response({"detail": "TFT not found"}, status=status.HTTP_404_NOT_FOUND)
        
class LaptopCreateView(APIView):
    permission_classes=[permissions.IsAdminUser]
    def post(self, request):
        user= request.user
        data= request.data

        laptop = {
            "name": data["name"],
            "description": data["description"],
            "price": data["price"],
            "stock": data["stock"],
            "image": data["image"],
        }
        serializer = LaptopsSerializer(data=laptop, many=False)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"detail": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        
class LaptopDeleteView(APIView):
    permission_classes=[permissions.IsAdminUser]

    def delete(self, request, pk):
        try:
            laptop = Laptops.objects.get(id=pk)
            laptop.delete()
            return Response({"detail": "TFT successfully deleted"}, status=status.HTTP_204_NO_CONTENT)
        except:
            return Response({"detail": "Not Found."}, status=status.HTTP_404_NOT_FOUND)
        
class LaptopEditView(APIView):
    permission_classes= [permissions.IsAdminUser]

    def put(self, request, pk):
        data= request.data
        laptop = Laptops.objects.get(id=pk)

        updated_laptop= {
            "name": data["name"] if data["name"] else laptop.name,
            "description": data["description"] if data["description"] else laptop.description,
            "price": data["price"] if data["price"] else laptop.price,
            "stock": data["stock"],
            "image": data["image"] if data["image"] else laptop.image,
        }
        serializer = LaptopsSerializer(laptop, data=updated_laptop)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"detail": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class AccessoriesView(APIView):
    def get(self, request):
        accessories = Accessories.objects.all()
        serializer = AccessoriesSerializer(accessories, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class AccessoriesDetailView(APIView):
    def get(self, request, pk):
        try:
            accessory = Accessories.objects.all(id=pk)
            serializer = AccessoriesSerializer(accessory)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except TFTs.DoesNotExist:
            return Response({"detail": "TFT not found"}, status=status.HTTP_404_NOT_FOUND)
        
class AccessoriesCreateView(APIView):
    permission_classes=[permissions.IsAdminUser]
    def post(self, request):
        user= request.user
        data= request.data

        accessory = {
            "name": data["name"],
            "description": data["description"],
            "price": data["price"],
            "stock": data["stock"],
            "image": data["image"],
        }
        serializer = AccessoriesSerializer(data=accessory, many=False)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"detail": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        
class AccessoriesDeleteView(APIView):
    permission_classes=[permissions.IsAdminUser]

    def delete(self, request, pk):
        try:
            accessory = Accessories.objects.get(id=pk)
            accessory.delete()
            return Response({"detail": "TFT successfully deleted"}, status=status.HTTP_204_NO_CONTENT)
        except:
            return Response({"detail": "Not Found."}, status=status.HTTP_404_NOT_FOUND)
        
class AccessoriesEditView(APIView):
    permission_classes= [permissions.IsAdminUser]

    def put(self, request, pk):
        data= request.data
        accessory = Accessories.objects.get(id=pk)

        updated_accessory= {
            "name": data["name"] if data["name"] else accessory.name,
            "description": data["description"] if data["description"] else accessory.description,
            "price": data["price"] if data["price"] else accessory.price,
            "stock": data["stock"],
            "image": data["image"] if data["image"] else accessory.image,
        }
        serializer = AccessoriesSerializer(accessory, data=updated_accessory)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"detail": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        

class ComputerPartsView(APIView):
    def get(self, request):
        computerparts = ComputerParts.objects.all()
        serializer = ComputerPartsSerializer(computerparts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class ComputerPartsDetailView(APIView):
    def get(self, request, pk):
        try:
            computerpart = ComputerParts.objects.all(id=pk)
            serializer = ComputerPartsSerializer(computerpart)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except TFTs.DoesNotExist:
            return Response({"detail": "TFT not found"}, status=status.HTTP_404_NOT_FOUND)
        
class ComputerPartsCreateView(APIView):
    permission_classes=[permissions.IsAdminUser]
    def post(self, request):
        user= request.user
        data= request.data

        computerpart = {
            "name": data["name"],
            "description": data["description"],
            "price": data["price"],
            "stock": data["stock"],
            "image": data["image"],
        }
        serializer = ComputerPartsSerializer(data=computerpart, many=False)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"detail": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        
class ComputerPartsDeleteView(APIView):
    permission_classes=[permissions.IsAdminUser]

    def delete(self, request, pk):
        try:
            computerpart = ComputerParts.objects.get(id=pk)
            computerpart.delete()
            return Response({"detail": "TFT successfully deleted"}, status=status.HTTP_204_NO_CONTENT)
        except:
            return Response({"detail": "Not Found."}, status=status.HTTP_404_NOT_FOUND)
        
class ComputerPartsEditView(APIView):
    permission_classes= [permissions.IsAdminUser]

    def put(self, request, pk):
        data= request.data
        computerpart = ComputerParts.objects.get(id=pk)

        updated_computerpart= {
            "name": data["name"] if data["name"] else computerpart.name,
            "description": data["description"] if data["description"] else computerpart.description,
            "price": data["price"] if data["price"] else computerpart.price,
            "stock": data["stock"],
            "image": data["image"] if data["image"] else computerpart.image,
        }
        serializer = ComputerPartsSerializer(computerpart, data=updated_computerpart)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"detail": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        

class CartAPIView(APIView):

    allowed_methods = ['POST', 'GET']  # Add 'POST' here
    def post(self, request, *args, **kwargs):
        cart_service = CartService(request)
        action = request.data.get("action")

        if action == "add_item":
            item_type = request.data.get("type")
            item_id = request.data.get("id")
            quantity = int(request.data.get("quantity", 1))

            cart_service.add_item(item_type, item_id, quantity)

            cart_details = cart_service.get_cart_details()
            total_price = cart_service.get_total_price()

            return Response({"cart_items": cart_details, "total_price": str(total_price)}, status=status.HTTP_200_OK)
        elif action == "remove_item":
            item_id = request.data.get("id")
            cart_service.remove_item(item_id)

            cart_details = cart_service.get_cart_details()
            total_price = cart_service.get_total_price()

            return Response({"cart_items": cart_details, "total_price": str(total_price)}, status=status.HTTP_200_OK)
        elif action == "clear_cart":
            cart_service.clear_cart()
            return Response({"detail": "Cart cleared"}, status=status.HTTP_200_OK)
        else:
            return Response({"detail": "Invalid action"}, status=status.HTTP_400_BAD_REQUEST)