import { Component } from '@angular/core';
import { CardComponent } from './card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  template: `
    <h1 class="text-xl font-semibold">Home</h1>
    <div class="mt-6 w-full md:mt-8">
      <form class="max-w-lg mx-auto">
        <div class="flex">
          <label
            for="search-dropdown"
            class="mb-2 text-sm font-medium text-gray-900 sr-only"
            >Your Email</label
          >
          <button
            (click)="showCategories = !showCategories"
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100  "
            type="button"
          >
            All categories
            <svg
              class="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          @if (showCategories) {
          <div
            id="dropdown"
            class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute mt-12"
          >
            <ul
              class="py-2 text-sm text-gray-700 "
              aria-labelledby="dropdown-button"
            >
              @for (item of categories; track $index) {
              <li>
                <button
                  (click)="showCategories = !showCategories"
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                >
                  {{ item.name }}
                </button>
              </li>
              }
            </ul>
          </div>
          }
          <div class="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search events..."
              required
            />
            <button
              type="submit"
              class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-primary rounded-e-lg border focus:ring-4 focus:outline-none focus:ring-green-300"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto mt-4">
        @for (item of cardData; track $index) {
        <app-card
          [cardTitle]="item.cardTitle"
          [cardDescription]="item.cardDescription"
          [cardImage]="item.cardImage"
          [cardLink]="item.cardLink"
        />

        }
      </div>
    </div>
  `,
})
export class HomeComponent {
  categories = [
    { name: 'Beach Cleaning' },
    { name: 'Tree Planting' },
    { name: 'Water Conservation' },
    { name: 'Recycling' },
  ];
  showCategories = false;
  cardData = [
    {
      cardTitle: 'Beach Cleaning',
      cardDescription:
        'Clean the beach and make it a better place for everyone.',
      cardImage: 'beach_clean.jpg',
      cardLink: '/beach-cleaning',
    },
    {
      cardTitle: 'Tree Planting',
      cardDescription: 'Plant trees and make the world a greener place.',
      cardImage: 'tree-plant.png',
      cardLink: '/tree-planting',
    },
    {
      cardTitle: 'Water Conservation',
      cardDescription: 'Conserve water and save the environment.',
      cardImage: 'Water_save.png',
      cardLink: '/waste-management',
    },
    {
      cardTitle: 'Electicity Conservation',
      cardDescription: 'Electicity Conservation and save the environment.',
      cardImage: 'elec.png',
      cardLink: '/recycling',
    },
  ];
}
