from rest_framework import serializers
from .models import GamingPC, GraphicsCard, Accessories, Laptops, TFTs, ComputerParts

class GamingPCSerializer(serializers.ModelSerializer):
    class Meta:
        model = GamingPC
        fields = ["id", "name", "description", "price", "stock", "image"]

class GraphicsCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = GraphicsCard
        fields = ["id", "name", "description", "price", "stock", "image"]

class AccessoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Accessories
        fields = ["id", "name", "description", "price", "stock", "image"]

class LaptopsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Laptops
        fields = ["id", "name", "description", "price", "stock", "image"]

class TFTsSerializer(serializers.ModelSerializer):
    class Meta:
        model = TFTs
        fields = ["id", "name", "description", "price", "stock", "image"]

class ComputerPartsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ComputerParts
        fields = ["id", "name", "description", "price", "stock", "image"]