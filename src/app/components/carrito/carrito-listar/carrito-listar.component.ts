import { Component, inject, OnInit } from '@angular/core';
import { CarritoService } from '../../../core/services/carrito.service';
import { Carrito } from '../../../core/modelo/carrito';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrito-listar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carrito-listar.component.html',
  styleUrl: './carrito-listar.component.scss'
})
export class CarritoListarComponent implements OnInit{
  public carritoService = inject(CarritoService);
  listCarrito: Carrito[] = [];

  ngOnInit(): void {
    this.getListCarrito();
  }

  getListCarrito(){
    this.listCarrito = this.carritoService.getCarrito();
  }

  eliminarItem(index: number){
    this.carritoService.eliminar(index);
    this.getListCarrito();
  }
}
