import { NgClass } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgClass],
  template: `
    <div class="container">
      <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 ">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-start rtl:justify-end">
              <button
                (click)="toogleMenu()"
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              >
                <span class="sr-only">Open sidebar</span>
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="https://flowbite.com" class="flex ms-2 md:me-24">
                <img src="icon.png" class="h-8 me-3" alt=" Logo" />
                <span
                  class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap"
                  >EarthBase</span
                >
              </a>
            </div>
            <div class="flex items-center">
              <div class="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow "
                  id="dropdown-user"
                >
                  <div class="px-4 py-3" role="none">
                    <p
                      class="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      Neil Sims
                    </p>
                    <p
                      class="text-sm font-medium text-gray-900 truncate"
                      role="none"
                    ></p>
                  </div>
                  <ul class="py-1" role="none">
                    <li>
                      <a
                        routerLink="/home"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        role="menuitem"
                        >Home</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        role="menuitem"
                        >Settings</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        role="menuitem"
                        >Earnings</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        role="menuitem"
                        >Sign out</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-white border-r border-gray-200 sm:translate-x-0"
        [ngClass]="showSidebar ? 'translate-x-0' : '-translate-x-full'"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white">
          <ul class="space-y-2 font-medium">
            <li>
              <a
                routerLink="/home"
                routerLinkActive="text-green-500"
                class="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group"
              >
                <svg
                  class="w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path
                    d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
                  />
                  <path
                    d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
                  />
                </svg>
                <span class="ms-3">Home</span>
              </a>
            </li>
            <li>
              <a
                href="/leaderboard"
                class="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path
                    d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"
                  />
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap">Leaderboard</span>
              </a>
            </li>
            <li>
              <a
                routerLink="/progress-tracker"
                class="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  fill="currentColor"
                >
                  <path
                    d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z"
                  />
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap"
                  >Progresstracker</span
                >
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div class="p-4 sm:ml-64">
        <div class="mt-16">
          <ng-content></ng-content>
          <router-outlet />
        </div>
      </div>
    </div>
  `,
})
export class LayoutComponent {
  showSidebar = false;
  toogleMenu() {
    this.showSidebar = !this.showSidebar;
  }
}
