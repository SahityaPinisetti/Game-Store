import { Injectable } from '@angular/core';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartItem[] = [];

  addToCart(game: CartItem) {
    let existingItem = this.cart.find(item => item.id === game.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({ ...game, quantity: 1 });
    }
  }

  getCartItems() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
  }
}
