import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../restaurants/restaurant.service';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor(private restaurantsService: RestaurantsService,
    private route: ActivatedRoute) { }

  reviews: Observable<any>;

  ngOnInit() {
    this.reviews = this.restaurantsService.
      reviewsOfRestaurant(this.route.parent.snapshot.params['id']);
  }

}
