import { RadioOption } from './../shared/radio/radio-option.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[]=[
    {label: "Dinheiro", value: 'MON'},
    {label: "Cartão de Débito", value: 'DEB'},
    {label: "Cartão Refeição", value: 'REF'},
  ]

  constructor() { }

  ngOnInit() {
  }

  
}
