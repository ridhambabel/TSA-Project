<template>
  <div
    class="min-h-screen bg-amber-50/50 text-slate-900 font-sans selection:bg-amber-200 selection:text-amber-900 relative"
  >
    <div
      class="absolute inset-0 bg-linear-to-b from-slate-900/90 via-slate-900/40 to-amber-50/50 h-[250px]"
    ></div>
    <nav
      class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 transition-all duration-300"
      :class="[
        isScrolled
          ? 'py-3 bg-slate-950/90 backdrop-blur-md shadow-lg border-b border-white/5'
          : 'py-6 bg-transparent',
      ]"
    >
      <!-- TOP LEFT TEXT-->
      <div class="flex items-center gap-3 cursor-pointer group z-20" @click="goHome">
        <NuxtLink to="/">
          <div
            class="h-10 w-10 rounded-xl bg-amber-400 hidden md:grid place-items-center text-slate-900 shadow-amber-400/20 shadow-lg hover:bg-amber-300 hover:scale-105 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
              />
              <path
                d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
              />
            </svg>
          </div>
        </NuxtLink>
        <div
          class="h-10 w-10 rounded-xl bg-amber-400 grid md:hidden place-items-center text-slate-900 shadow-amber-400/20 shadow-lg hover:bg-amber-300 hover:scale-105 transition-all duration-300"
        >
          <font-awesome-icon
            icon="fa-solid fa-bars"
            class="text-2xl z-5 relative"
            @click="toggleNavbar()"
          />
        </div>
        <div class="leading-tight text-amber-50 block">
          <p class="text-[10px] uppercase tracking-[0.2em] text-amber-200/80">
            Harborough
          </p>
          <p class="text-sm font-bold tracking-wide">Resource Hub</p>
        </div>
      </div>

      <div class="hidden md:flex items-center gap-6 font-medium text-amber-50">
        <NuxtLink
          to="/"
          class="nav-link hover:text-amber-300 transition-colors"
          :class="{ 'drop-shadow-sm': !isScrolled }"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/guides"
          class="nav-link hover:text-amber-300 transition-colors"
          :class="{ 'drop-shadow-sm': !isScrolled }"
        >
          Guides
        </NuxtLink>
        <NuxtLink
          to="/Addresource"
          class="nav-link hover:text-amber-300 transition-colors whitespace-nowrap"
          :class="{ 'drop-shadow-sm': !isScrolled }"
        >
          Add Resource
        </NuxtLink>
        <NuxtLink
          to="/About"
          class="nav-link hover:text-amber-300 transition-colors"
          :class="{ 'drop-shadow-sm': !isScrolled }"
        >
          About
        </NuxtLink>
      </div>

      <div class="flex items-center gap-3">
        <button
          @click="isBackpackOpen = true"
          class="relative rounded-full p-2 text-amber-50 hover:bg-white/10 transition cursor-pointer"
          title="My Backpack"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            ></path>
          </svg>
          <!-- <span
            v-if="savedResources.length > 0"
            class="absolute top-0 right-0 h-4 w-4 rounded-full bg-amber-400 text-[10px] font-bold text-slate-900 grid place-items-center shadow-sm"
          >
            {{ savedResources.length }}
          </span> -->
        </button>

        <!-- FIND HELP BUTTON -->
        <NuxtLink
          to="/"
          class="hidden hover:cursor-pointer md:inline-flex rounded-full bg-amber-400 px-5 py-2 text-xs font-semibold text-slate-900 shadow-lg hover:bg-amber-300 hover:scale-105 active:scale-95 transition-all"
        >
          Find Help
        </NuxtLink>
      </div>
            <!-- MOBILE SIDEBAR -->
      <div :style="{width: sideWidth}" class="h-screen w-0 fixed z-10 top-0 left-0 bg-slate-800 overflow-x-hidden pt-10 duration-400 md:hidden">
        <div class="flex flex-col ml-10 text-amber-50 mt-15 gap-5 text-xl">
          <NuxtLink
          to="/"
          class="nav-link hover:text-amber-300 duration-200 transition-colors"
          :class="{ 'drop-shadow-sm': !isScrolled }"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/guides"
          class="nav-link hover:text-amber-300 duration-200 transition-colors"
          :class="{ 'drop-shadow-sm': !isScrolled }"
        >
          Guides
        </NuxtLink>
        <NuxtLink
          to="/Addresource"
          class="nav-link hover:text-amber-300 duration-200 transition-colors"
          :class="{ 'drop-shadow-sm': !isScrolled }"
        >
          Add Resource
        </NuxtLink>
        <NuxtLink
          to="/About"
          class="nav-link hover:text-amber-300 duration-200 transition-colors"
          :class="{ 'drop-shadow-sm': !isScrolled }"
        >
          About
        </NuxtLink>
        </div>
      </div>
    </nav>

    
    <!-- MAIN CONTENT -->
    <main class="pt-32 pt-5 pb-24 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-5 gap-12 items-start">
        <!-- Left Side: Context & Info -->
        <div class="lg:col-span-2 animate-fade-up">
          <span
            class="inline-block py-1.5 px-4 rounded-full bg-amber-100 border border-amber-200 text-amber-900 font-bold tracking-widest text-[10px] uppercase mb-6 shadow-sm"
          >
            Community Hub/Calendar
          </span>
          <h1
            class="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight tracking-tight"
          >
            Share a Resource or Event
          </h1>
          <p class="text-slate-600 text-md leading-relaxed mb-8">
            Help us keep Harborough connected. If you're hosting a food drive,
            a job fair, or a free wellness workshop, let the community know. Or, if you're
            creating a new service for those in need, post it here so we can benefit everyone!
          </p>

          <div
            class="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-sm hover:scale-101 transition-all duration-300"
          >
            <h3 class="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5 text-amber-400"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 01-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clip-rule="evenodd"
                />
              </svg>
              Submission Guidelines
            </h3>
            <ul class="space-y-3 text-sm text-slate-600">
              <li class="flex gap-3">
                <div
                  class="h-1.5 w-1.5 rounded-full bg-slate-300 mt-2 shrink-0"
                ></div>
                <span>Events and resources must be free or low-cost to attend.</span>
              </li>
              <li class="flex gap-3">
                <div
                  class="h-1.5 w-1.5 rounded-full bg-slate-300 mt-2 shrink-0"
                ></div>
                <span>Must be located within Harborough city limits.</span>
              </li>
              <li class="flex gap-3">
                <div
                  class="h-1.5 w-1.5 rounded-full bg-slate-300 mt-2 shrink-0"
                ></div>
                <span>Please allow 24-48 hours for moderation approval.</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Right Side: The Form -->
        <div class="lg:col-span-3">
          <div class="mb-2 mx-auto">
            <label class="switch hover:scale-101 hover:-translate-y-[1px] transition-all duration-300">
              <input type="checkbox" v-model="toggleMode">
              <span class="slider text-slate-600"></span>
            </label>
          </div>
          <!-- Resource Form -->
          <div class="card-base animate-fade-up delay-100" v-if="!toggleMode">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Section 1: Event Details -->
               
              <div>
                <h3
                  class="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4"
                >
                  Resource Details
                </h3>
                <div class="space-y-4">
                  <div>
                    <label
                      class="block text-xs font-bold text-slate-500 uppercase mb-1"
                      >Resource Title</label
                    >
                    <input
                      required
                      type="text"
                      class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all placeholder:text-slate-400"
                      placeholder="e.g. Harborough Community Pantry"
                    />
                  </div>
                  <label
                    class="block text-xs font-bold text-slate-500 uppercase mb-1"
                  >
                    Open Hours
                    <div class="tooltip">
                      <font-awesome-icon
                        icon="fa-solid fa-circle-question"
                        class="text-md text-amber-700 z-5"
                      />
                      <span class="tooltiptext normal-case"
                        >Select your days of operation, 
                        then the hours for each day.</span
                      >
                    </div>
                  </label>
                  <div class="flex flex-row items-center justify-center w-full">
                    <input type="checkbox" v-model="fulltime">
                    <label
                      class="block text-md font-bold text-slate-500 uppercase ml-2"
                    >
                      Open 24/7
                    </label>
                  </div>
                  <fieldset :disabled="fulltime">
                    <div class="flex flex-row sm:grid grid-cols-2 gap-4 mb-2"
                        v-for="day in days" :key="day">
                          <div class="flex flex-row items-center">
                            <input type="checkbox" class="" @change="disableAllInputs($event)">
                            <label
                              class="block text-sm font-bold text-slate-500 uppercase ml-2"
                            >
                              {{day}}
                            </label>
                          </div>
                          
                        <div class="flex flex-row gap-2 items-center">
                          <input
                            required disabled
                            type="time"
                            class="text-sm md:text-md w-[50%] bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none 
                            focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all disabled:bg-slate-200"
                          />
                          <p class="text-sm font-bold text-slate-500">to</p>
                          <input
                            required disabled
                            type="time"
                            class="text-sm md:text-md w-[50%] bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none 
                            focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all disabled:bg-slate-200"
                          />
                        </div>
                    </div>
                  </fieldset>
                  <div>
                    <label
                      class="block text-xs font-bold text-slate-500 uppercase mb-1"
                      >Location / Address</label
                    >
                    <div class="relative">
                      <input
                        required
                        type="text"
                        class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 pl-10 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all placeholder:text-slate-400"
                        placeholder="123 Main St, Harborough"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-5 h-5 text-slate-400 absolute left-3 top-3.5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <label
                      class="block text-xs font-bold text-slate-500 uppercase mb-1"
                      >Category</label
                    >
                    <select
                      class="h-7 w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all cursor-pointer"
                    >
                      <option>General Community</option>
                      <option>Food & Pantry</option>
                      <option>Housing Support</option>
                      <option>Employment & Jobs</option>
                      <option>Health & Wellness</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="h-px bg-slate-100 w-full"></div>

              <!-- Section 2: Contact Info -->
              <div>
                <h3
                  class="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4"
                >
                  Organizer Info
                </h3>
                <div class="space-y-4">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        class="block text-xs font-bold text-slate-500 uppercase mb-1"
                        >Organization Name</label
                      >
                      <input
                        type="text"
                        class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
                      />
                    </div>
                    <div>
                      <label
                        class="block text-xs font-bold text-slate-500 uppercase mb-1"
                        >
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      class="block text-xs font-bold text-slate-500 uppercase mb-1"
                      >Description</label
                    >
                    <textarea
                      rows="4"
                      class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all placeholder:text-slate-400"
                      placeholder="Tell us what you provide, who is eligible for your resource, etc..."
                    ></textarea>
                  </div>
                </div>
              </div>

              <!-- Submit Button -->
              <div class="pt-2">
                <button
                  type="submit"
                  class="w-full rounded-xl bg-slate-900 py-4 text-white font-bold text-lg shadow-xl shadow-slate-900/20 hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Submit Resource</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <p class="text-center text-xs text-slate-400 mt-4">
                  By submitting, you agree to the Harborough Community
                  Guidelines.
                </p>
              </div>
            </form>
          </div>


          <!-- Event Form -->
          <div class="card-base animate-fade-up delay-100" v-if="toggleMode">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Section 1: Event Details -->
              <div>
                <h3
                  class="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4"
                >
                  Event Details
                </h3>
                <div class="space-y-4">
                  <div>
                    <label
                      class="block text-xs font-bold text-slate-500 uppercase mb-1"
                      >Event Title</label
                    >
                    <input
                      required
                      type="text"
                      class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all placeholder:text-slate-400"
                      placeholder="e.g. Community Food Drive"
                    />
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        class="flex gap-1 flex-row text-xs font-bold text-slate-500 uppercase mb-1"
                      >
                        Date
                        <div class="tooltip">
                          <font-awesome-icon
                            icon="fa-solid fa-circle-question"
                            class="text-md text-amber-700 z-5"
                          />
                          <span class="tooltiptext normal-case"
                            >If it's a multi-day event, enter the staring date
                            and put details in the description below.</span
                          >
                        </div>
                      </label>
                      <input
                        required
                        type="date"
                        class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
                      />
                    </div>
                    <div>
                      <label
                        class="block text-xs font-bold text-slate-500 uppercase mb-1"
                      >
                        Time
                      </label>
                      <div class="flex flex-row gap-2 items-center">
                      <input
                        required
                        type="time"
                        class="text-sm w-[50%] bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
                      />
                      <p class="text-sm font-bold text-slate-500">to</p>
                      <input
                        required
                        type="time"
                        class="text-sm w-[50%] bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
                      />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      class="block text-xs font-bold text-slate-500 uppercase mb-1"
                      >Location / Address</label
                    >
                    <div class="relative">
                      <input
                        required
                        type="text"
                        class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 pl-10 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all placeholder:text-slate-400"
                        placeholder="123 Main St, Harborough"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-5 h-5 text-slate-400 absolute left-3 top-3.5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div class="h-px bg-slate-100 w-full"></div>

              <!-- Section 2: Contact Info -->
              <div>
                <h3
                  class="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4"
                >
                  Organizer Info
                </h3>
                <div class="space-y-4">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        class="block text-xs font-bold text-slate-500 uppercase mb-1"
                        >Organization Name</label
                      >
                      <input
                        type="text"
                        class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
                      />
                    </div>
                    <div>
                      <label
                        class="block text-xs font-bold text-slate-500 uppercase mb-1"
                        >Email Address</label
                      >
                      <input
                        required
                        type="email"
                        class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      class="block text-xs font-bold text-slate-500 uppercase mb-1"
                      >Description</label
                    >
                    <textarea
                      rows="4"
                      class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all placeholder:text-slate-400"
                      placeholder="Tell us what attendees should bring, who is eligible, etc..."
                    ></textarea>
                  </div>
                </div>
              </div>

              <!-- Submit Button -->
              <div class="pt-2">
                <button
                  type="submit"
                  class="w-full rounded-xl bg-slate-900 py-4 text-white font-bold text-lg shadow-xl shadow-slate-900/20 hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Submit Event</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <p class="text-center text-xs text-slate-400 mt-4">
                  By submitting, you agree to the Harborough Community
                  Guidelines.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>

    <!-- SUCCESS POPUP MODAL -->
    <div
      v-if="showSuccessModal"
      class="fixed inset-0 z-100 flex items-center justify-center p-4"
    >
      <!-- Backdrop -->
      <div
        class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        @click="closeModal"
      ></div>

      <!-- Modal Content -->
      <div
        class="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center transform transition-all animate-fade-up border border-white/20"
      >
        <div
          class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-8 h-8"
          >
            <path
              fill-rule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <h2 class="text-2xl font-black text-slate-900 mb-2">
          Submission Received!
        </h2>
        <p class="text-slate-600 mb-8 leading-relaxed">
          Thank you for contributing to the Harborough community! Your resource/event has
          been sent to our team and will be processed within 24 hours. If we require any additional information,
          we will send it to the email address you provided.
        </p>

        <button
          @click="closeModal"
          class="w-full py-3.5 rounded-xl bg-amber-400 text-slate-900 font-bold hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/20"
        >
          Return to Calendar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// -- SCROLL LOGIC (Fixes the transparent navbar issue) --
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function disableAllInputs(event) {
    const el = event.target;
    const parent = el.parentNode.parentNode;
    const inputs = parent.querySelectorAll('input, button, select, textarea');

    // Iterate through the found elements
    inputs.forEach(input => {
        if (input !== el) {
            input.disabled = !el.checked;
        }
    });
}

// -- FORM LOGIC --
const showSuccessModal = ref(false);

function handleSubmit() {
  // Simulating an API call or form submission
  showSuccessModal.value = true;
}

function closeModal() {
  showSuccessModal.value = false;
  // Optional: Redirect to home or clear form here
  // window.location.href = "/";
}

// -- LIFECYCLE HOOKS --
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const fulltime = ref(false);
const toggleMode = ref(false);

const route = useRoute();
onMounted(() => {
  if (route.query.command == "event") {
    toggleMode.value = true;
  } else {
    // nothing
  }
});


</script>
<style scoped>
/* Animations */
.animate-fade-up {
  animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.delay-100 {
  animation-delay: 0.2s;
}

.card-base {
  background-color: #ffffff;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 20px -5px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(226, 232, 240, 0.8);
  transition: all 0.3s ease;
}

/* Custom Input Styling tweaks */
input[type="time"]::-webkit-calendar-picker-indicator {
  cursor: pointer;
  opacity: 0.6;
}

.tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.tooltiptext {
  visibility: hidden;
  width: 160px;
  background-color: black;
  color: #ffffff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  top: -5px;
  left: 150%;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

.tooltiptext::after {
  content: " ";
  position: absolute;
  top: 12px;
  right: 100%;
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent black transparent transparent;
}

.switch {
  position: relative;
  display: inline-block;
  width: 208px;
  height: 42px;
  margin-left: calc(50% - 104px);
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
}

.slider:before {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  position: absolute;
  content: "Resource";
  height: 34px;
  width: 100px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 32px;
}

input:checked + .slider {
  background-color: #ffd230;
}

input:focus + .slider {
  box-shadow: 0 0 1px #ffd230;
}

input:checked + .slider:before {
  content: "Event";
  -webkit-transform: translateX(100px);
  -ms-transform: translateX(100px);
  transform: translateX(100px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
