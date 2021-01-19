from django.http import HttpResponse


def orders(request):
    return HttpResponse(f'Order list goes here')


def order(request, order_id):
    return HttpResponse(f'Order {order_id} goes here')
