from django.urls import path
from product import views

urlpatterns= [ 
    path("tft/", views.TFTsView.as_view()),
    path("tft/<str:pk>/", views.TFTsDetailView.as_view()),
    path("tft-create/", views.TFTsCreateView.as_view()),
    path("tft-update/<str:pk>/", views.TFTEditView.as_view()),
    path("tft-delete/<str:pk>/", views.TFTDeleteView.as_view()),

    path("pc/", views.GamingPCView.as_view()),
    path("pc/<str:pk>/", views.GamingPCDetailView.as_view()),
    path("pc-create/", views.GamingPCCreateView.as_view()),
    path("pc-update/<str:pk>/", views.GamingPCEditView.as_view()),
    path("pc-delete/<str:pk>/", views.GamingPCDeleteView.as_view()),

    path("graphicscard/", views.GraphicsCardView.as_view()),
    path("graphicscard/<str:pk>", views.GraphicsCardDetailView.as_view()),
    path("graphicscard-create/", views.GraphicsCardCreateView.as_view()),
    path("graphicscard-update/<str:pk>/", views.GraphicsCardEditView.as_view()),
    path("graphicscard-delete/<str:pk>/", views.GraphicsCardDeleteView.as_view()),

    path("laptop/", views.LaptopView.as_view()),
    path("laptop/<str:pk>", views.LaptopDetailView.as_view()),
    path("laptop-create/", views.LaptopCreateView.as_view()),
    path("laptop-update/<str:pk>/", views.LaptopEditView.as_view()),
    path("laptop-delete/<str:pk>/", views.LaptopDeleteView.as_view()),

    path("accessories/", views.AccessoriesView.as_view()),
    path("accessories/<str:pk>/", views.AccessoriesDetailView.as_view()),
    path("accessories-create/", views.AccessoriesCreateView.as_view()),
    path("accessories-update/<str:pk>/", views.AccessoriesEditView.as_view()),
    path("accessories-delete/<str:pk>/", views.AccessoriesDeleteView.as_view()),

    path("computerparts/", views.ComputerPartsView.as_view()),
    path("computerparts/<str:pk>/", views.ComputerPartsDetailView.as_view()),
    path("computerparts-create/", views.ComputerPartsCreateView.as_view()),
    path("computerparts-update/<str:pk>/", views.ComputerPartsEditView.as_view()),
    path("computerparts-delete/", views.ComputerPartsDeleteView.as_view()),

    path('cart/', views.CartAPIView.as_view(), name='cart')
    
]