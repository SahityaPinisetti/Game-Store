// import { Component } from '@angular/core';

// interface Game {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
// }

// @Component({
//   selector: 'app-game-list',
//   templateUrl: './game-list.component.html',
//   styleUrls: ['./game-list.component.css']
// })
// export class GameListComponent {
//   games: Game[] = [
//     { id: 1, name: 'Cyberpunk 2077', price: 59.99, image: 'assets/cyberpunk.jpg' },
//     { id: 2, name: 'Elden Ring', price: 49.99, image: 'assets/eldenring.jpg' },
//     { id: 3, name: 'The Witcher 3', price: 39.99, image: 'assets/witcher3.jpg' }
//   ];
// }
import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

interface Game {
  id: number;
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent {
  games: Game[] = [
    { id: 1, name: 'Cyberpunk 2077', price: 59.99, image: 'assets/cyberpunk.jpg' },
    { id: 2, name: 'Elden Ring', price: 49.99, image: 'assets/eldenring.jpg' },
    { id: 3, name: 'The Witcher 3', price: 39.99, image: 'assets/witcher3.jpg' }
  ];

  constructor(private cartService: CartService) {}

  addToCart(game: Game) {
    this.cartService.addToCart({ ...game, quantity: 1 });
    alert(`${game.name} added to cart!`);
  }
}

