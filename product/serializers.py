from rest_framework import serializers
from .models import GamingPC, GraphicsCard, Accessories, Laptops, TFTs, ComputerParts

class GamingPCSerializer(serializers.ModelSerializer):
    model = GamingPC
    fields = ["id", "name", "description", "price", "stock", "image"]

class GraphicsCardSerializer(serializers.ModelSerializer):
    model = GraphicsCard
    fields = ["id", "name", "description", "price", "stock", "image"]

class AccessoriesSerializer(serializers.ModelSerializer):
    model = Accessories
    fields = ["id", "name", "description", "price", "stock", "image"]

class LaptopsSerializer(serializers.ModelSerializer):
    model= Laptops
    fields = ["id", "name", "description", "price", "stock", "image"]

class TFTsSerializer(serializers.ModelSerializer):
    model = TFTs
    fields = ["id", "name", "description", "price", "stock", "image"]

class ComputerPartsSerializer(serializers.ModelSerializer):
    model = ComputerParts
    fields = ["id", "name", "description", "price", "stock", "image"]