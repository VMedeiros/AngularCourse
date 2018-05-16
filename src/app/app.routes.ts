import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { Routes } from "@angular/router";
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';

export const ROUTES: Routes = [
    //Navegação 'nome da rota', Componente
    { path: '', component: HomeComponent },//redireciona para a página Home
    { path: 'restaurants', component: RestaurantsComponent },
    {
        path: 'restaurants/:id', component: RestaurantDetailComponent,
        //Navegação 'componente pai/componente filho', Componente
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },//redireciona para o menu
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent }
        ]
    },
    { path: 'about', component: AboutComponent }
]