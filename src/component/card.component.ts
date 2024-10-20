import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <div class="max-h-52 min-h-52 overflow-hidden object-cover">
        <a href="#">
          <img class="rounded-t-lg" [src]="cardImage()" alt="" />
        </a>
      </div>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
            {{ cardTitle() }}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {{ cardDescription() }}
        </p>
        <!-- routerLink="{{ cardLink() }}" -->
        <a
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-accent/75 rounded-lg"
        >
          Read more
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  `,
})
export class CardComponent {
  cardTitle = input<string>();
  cardDescription = input<string>();
  cardImage = input<string>();
  cardLink = input<string>();
}
