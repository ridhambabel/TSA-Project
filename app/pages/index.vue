<template>
  <div
    class="min-h-screen bg-amber-50 text-slate-900 overflow-x-hidden selection:bg-amber-300 selection:text-slate-900 font-sans"
  >
    <!-- BACKPACK DRAWER -->
    <div
      class="fixed inset-0 z-100 overflow-hidden transition-visibility duration-300"
      :class="
        isBackpackOpen
          ? 'visible pointer-events-auto'
          : 'invisible pointer-events-none'
      "
    >
      <!-- Backdrop -->
      <div
        class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
        :class="isBackpackOpen ? 'opacity-100' : 'opacity-0'"
        @click="isBackpackOpen = false"
      ></div>

      <!-- Drawer Panel -->
      <div
        class="absolute top-0 bottom-0 right-0 w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 flex flex-col h-full"
        :class="isBackpackOpen ? 'translate-x-0' : 'translate-x-full'"
      >
        <!-- Drawer Header -->
        <div
          class="p-6 bg-amber-400 flex items-center justify-between shrink-0"
        >
          <div>
            <h2 class="text-xl font-bold text-slate-900">
              My Resource Backpack
            </h2>
            <p class="text-xs text-slate-800/80">
              Your saved contacts & services
            </p>
          </div>
          <!-- Close Button -->
          <button
            @click.stop="isBackpackOpen = false"
            class="group h-10 w-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors cursor-pointer"
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
              class="text-slate-900 group-hover:scale-110 transition-transform"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <!-- Drawer Content -->
        <div class="flex-1 overflow-y-auto p-6 space-y-4">
          <div
            v-if="savedResources.length === 0"
            class="text-center py-10 text-slate-500"
          >
            <div
              class="inline-block p-4 rounded-full bg-slate-100 mb-3 text-slate-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
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
            </div>
            <p>Your backpack is empty.</p>
            <p class="text-sm mt-2">
              Click the heart icon on any resource to save it here for quick
              access.
            </p>
          </div>

          <div
            v-for="item in savedResources"
            :key="item.id"
            class="relative rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm"
          >
            <div class="pr-8">
              <h4 class="font-bold text-slate-900">{{ item.name }}</h4>
              <p class="text-xs text-slate-600 mt-1">{{ item.phone }}</p>
              <p class="text-xs text-slate-600">{{ item.address }}</p>
            </div>
            <button
              @click="toggleSave(item)"
              class="absolute top-4 right-4 text-amber-500 hover:text-red-500 transition-colors"
              title="Remove"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <!-- Print button removed -->
      </div>
    </div>

    <!-- NAVBAR -->
    <nav
      class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 transition-all duration-300"
      :class="[
        isScrolled
          ? 'py-3 bg-slate-950/90 backdrop-blur-md shadow-lg border-b border-white/5'
          : 'py-6 bg-transparent',
      ]"
    >
      <div class="flex items-center gap-3 cursor-pointer group" @click="goHome">
        <div
          class="h-10 w-10 rounded-xl bg-amber-400 grid place-items-center text-slate-900 shadow-amber-400/20 shadow-lg group-hover:bg-amber-300 group-hover:scale-105 transition-all duration-300"
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
        <div class="leading-tight text-amber-50 hidden sm:block">
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
          class="nav-link hover:text-amber-300 transition-colors"
          :class="{ 'drop-shadow-sm': !isScrolled }"
        >
          Add Resource
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
          <span
            v-if="savedResources.length > 0"
            class="absolute top-0 right-0 h-4 w-4 rounded-full bg-amber-400 text-[10px] font-bold text-slate-900 grid place-items-center shadow-sm"
          >
            {{ savedResources.length }}
          </span>
        </button>

        <!-- FIND HELP BUTTON -->
        <NuxtLink
          to="/"
          class="hidden hover:cursor-pointer md:inline-flex rounded-full bg-amber-400 px-5 py-2 text-xs font-semibold text-slate-900 shadow-lg hover:bg-amber-300 hover:scale-105 active:scale-95 transition-all"
        >
          Find Help
        </NuxtLink>
      </div>
    </nav>

    <!-- HERO -->
    <header class="relative h-screen overflow-hidden">
      <div ref="heroBg" class="absolute inset-0 h-full w-full">
        <img
          src="/assets/img/TopIMG.jpg"
          alt="Community skyline"
          class="h-full w-full object-cover"
        />
      </div>
      <div
        class="absolute inset-0 bg-linear-to-b from-slate-900/90 via-slate-900/40 to-amber-50/95"
      ></div>

      <div
        id="hero"
        class="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-amber-50 pt-16"
      >
        <div ref="heroContent">
          <p
            class="hero-elem mb-3 text-[11px] uppercase tracking-[0.35em] text-amber-200/90 opacity-0 translate-y-4"
          >
            Welcome to
          </p>
          <h1
            class="hero-elem max-w-4xl text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight opacity-0 translate-y-4"
          >
            <span class="block">Harborough Community Resource Hub</span>
          </h1>
          <p
            class="hero-elem mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-amber-100/90 opacity-0 translate-y-4"
          >
            One place to find local food, housing, health, education, and
            support services. Curated for residents, students, and families.
          </p>
          <div
            class="hero-elem mt-6 flex flex-wrap items-center justify-center gap-3 opacity-0 translate-y-4"
          >
            <div
              @click="scrollToSection('directory')"
              class="hover:cursor-pointer rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg hover:bg-amber-300 hover:scale-105 active:scale-95 transition-all"
            >
              Browse Resources
            </div>
            <NuxtLink
              to="/Addresource"
              class="hover:cursor-pointer rounded-full border border-amber-200/70 px-6 py-3 text-sm font-semibold text-amber-50 hover:bg-amber-50/10 active:scale-95 transition-all"
            >
              Suggest a Resource
            </NuxtLink>
          </div>
        </div>

        <div class="mt-10 w-full flex justify-center px-4">
          <div
            ref="quickFilters"
            class="flex flex-wrap items-center justify-center gap-3 rounded-full bg-slate-900/55 px-6 py-3 backdrop-blur-lg shadow-2xl max-w-4xl opacity-0 scale-95"
          >
            <button
              v-for="cat in categories"
              :key="cat"
              type="button"
              class="rounded-full border border-amber-200/60 px-4 py-1.5 text-[11px] font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
              :class="
                selectedCategory === cat
                  ? 'text-amber-100 hover:text-white'
                  : 'text-amber-100 hover:text-white'
              "
              @click="selectedCategory = cat === selectedCategory ? '' : cat"
            >
              {{ cat }}
            </button>
          </div>
        </div>
      </div>
    </header>

    <main>
      <div id="chatbot" class="fixed right-10 bottom-10 z-100">
        <div class="relative z-1000">
          <font-awesome-icon
            icon="fa-solid fa-circle-question"
            class="text-5xl text-amber-700 z-5 relative"
            @click="toggleChatBot()"
          />
          <div
            id="chatbot-body"
            class="hidden h-[400px] w-[300px] bg-white rounded-3xl border border-black bottom-14 right-1 z-1000 transition-all duration-300 p-4"
          >
            <p
              class="text-slate-600 text-sm mt-1 text-center font-semibold"
              id="chatbot-text"
            >
              What do you need help with today?
            </p>
            <div class="flex gap-3 flex-col pt-3" id="chatbot-buttons">
              <div
                @click="startSelection()"
                class="hover:cursor-pointer rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg hover:bg-amber-300 hover:scale-105 active:scale-95 transition-all"
                id="cb-find"
              >
                I want to find resources!
              </div>

              <NuxtLink
                to="/Addresource"
                class="hover:cursor-pointer rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg hover:bg-amber-300 hover:scale-105 active:scale-95 transition-all"
                id="cb-submit"
              >
                I want to submit a resource!
              </NuxtLink>

              <div
                @click="
                  scrollToSection('about');
                  resetChatbot();
                "
                class="hover:cursor-pointer rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg hover:bg-amber-300 hover:scale-105 active:scale-95 transition-all"
                id="cb-about"
              >
                I want to learn more about this tool!
              </div>
              <div
                @click="selectionCommunity()"
                class="hidden hover:cursor-pointer rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg hover:bg-amber-300 hover:scale-105 active:scale-95 transition-all"
                id="cb-community"
              >
                I want to help out the community!
              </div>
              <div
                @click="selectionPersonal()"
                class="hidden hover:cursor-pointer rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg hover:bg-amber-300 hover:scale-105 active:scale-95 transition-all"
                id="cb-personal"
              >
                I'm looking for personal aid or assistance!
              </div>
              <div
                @click="
                  filterByGuide('Students');
                  resetChatbot();
                "
                class="hidden hover:cursor-pointer rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg hover:bg-amber-300 hover:scale-105 active:scale-95 transition-all"
                id="cb-children"
              >
                I want to find something for my children!
              </div>
              <div
                @click="
                  filterByGuide('Other');
                  resetChatbot();
                "
                class="hidden hover:cursor-pointer rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg hover:bg-amber-300 hover:scale-105 active:scale-95 transition-all"
                id="cb-other"
              >
                I'm looking for something else!
              </div>
              <div
                @click="
                  filterByGuide('Everyone');
                  resetChatbot();
                "
                class="hidden hover:cursor-pointer rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg hover:bg-amber-300 hover:scale-105 active:scale-95 transition-all"
                id="cb-browse"
              >
                I just want to browse!
              </div>
              <div
                @click="
                  filterByGuide('Food');
                  resetChatbot();
                "
                class="hidden hover:cursor-pointer rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg hover:bg-amber-300 hover:scale-105 active:scale-95 transition-all"
                id="cb-food"
              >
                I want to help with food!
              </div>
              <div
                @click="
                  filterByGuide('Families');
                  resetChatbot();
                "
                class="hidden hover:cursor-pointer rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg hover:bg-amber-300 hover:scale-105 active:scale-95 transition-all"
                id="cb-housing"
              >
                I want to help with housing and shelter!
              </div>
              <div
                @click="
                  filterByGuide('Health');
                  resetChatbot();
                "
                class="hidden hover:cursor-pointer rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg hover:bg-amber-300 hover:scale-105 active:scale-95 transition-all"
                id="cb-health"
              >
                I need help with health and personal wellness!
              </div>
              <div
                @click="
                  filterByGuide('Job');
                  resetChatbot();
                "
                class="hidden hover:cursor-pointer rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg hover:bg-amber-300 hover:scale-105 active:scale-95 transition-all"
                id="cb-career"
              >
                I need career help!
              </div>
              <div
                @click="
                  filterByGuide('Food');
                  resetChatbot();
                "
                class="hidden hover:cursor-pointer rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg hover:bg-amber-300 hover:scale-105 active:scale-95 transition-all"
                id="cb-foodhelp"
              >
                I need help with food!
              </div>
              <div
                @click="
                  filterByGuide('Families');
                  resetChatbot();
                "
                class="hidden hover:cursor-pointer rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg hover:bg-amber-300 hover:scale-105 active:scale-95 transition-all"
                id="cb-housinghelp"
              >
                I need help with housing and shelter!
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- COMMUNITY GUIDES -->
      <section
        class="scroll-section py-12 px-6 bg-white border-b border-slate-100"
      >
        <div class="max-w-6xl mx-auto">
          <div
            class="text-center mb-8 animate-on-scroll opacity-0 translate-y-4"
          >
            <h2 class="text-2xl font-bold text-slate-900">
              Who are you seeking help for?
            </h2>
            <p class="text-slate-600 text-sm mt-1">
              Select a group to see recommended resources.
            </p>
          </div>

          <div
            class="grid grid-cols-2 md:grid-cols-4 gap-4 animate-on-scroll opacity-0 translate-y-4"
          >
            <div
              @click="filterByGuide('Families')"
              class="group cursor-pointer rounded-xl bg-amber-50 p-6 text-center hover:bg-amber-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div
                class="mb-3 mx-auto h-12 w-12 rounded-full bg-amber-200 group-hover:bg-white text-amber-800 grid place-items-center text-xl"
              >
                👨‍👩‍👧
              </div>
              <h3 class="font-bold text-slate-900">Families</h3>
              <p class="text-xs text-slate-600 group-hover:text-slate-900 mt-1">
                Food, housing & care
              </p>
            </div>
            <div
              @click="filterByGuide('Students')"
              class="group cursor-pointer rounded-xl bg-amber-50 p-6 text-center hover:bg-amber-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div
                class="mb-3 mx-auto h-12 w-12 rounded-full bg-amber-200 group-hover:bg-white text-amber-800 grid place-items-center text-xl"
              >
                🎓
              </div>
              <h3 class="font-bold text-slate-900">Students</h3>
              <p class="text-xs text-slate-600 group-hover:text-slate-900 mt-1">
                Tutoring & supplies
              </p>
            </div>
            <div
              @click="filterByGuide('Seniors')"
              class="group cursor-pointer rounded-xl bg-amber-50 p-6 text-center hover:bg-amber-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div
                class="mb-3 mx-auto h-12 w-12 rounded-full bg-amber-200 group-hover:bg-white text-amber-800 grid place-items-center text-xl"
              >
                👴
              </div>
              <h3 class="font-bold text-slate-900">Seniors</h3>
              <p class="text-xs text-slate-600 group-hover:text-slate-900 mt-1">
                Health & connection
              </p>
            </div>
            <div
              @click="filterByGuide('Everyone')"
              class="group cursor-pointer rounded-xl bg-amber-50 p-6 text-center hover:bg-amber-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div
                class="mb-3 mx-auto h-12 w-12 rounded-full bg-amber-200 group-hover:bg-white text-amber-800 grid place-items-center text-xl"
              >
                🤝
              </div>
              <h3 class="font-bold text-slate-900">Community</h3>
              <p class="text-xs text-slate-600 group-hover:text-slate-900 mt-1">
                Events & legal aid
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- DIRECTORY SECTION -->
      <section
        id="directory"
        class="scroll-section py-16 px-6 md:px-10 lg:px-20 bg-amber-50 scroll-mt-20 overflow-hidden"
      >
        <div class="max-w-6xl mx-auto">
          <div
            class="animate-on-scroll flex flex-col md:flex-row md:items-end md:justify-between gap-6 opacity-0 translate-y-8"
          >
            <div>
              <h2 class="text-3xl font-bold text-slate-900">
                Find community resources
              </h2>
              <p class="mt-2 text-slate-600 text-sm md:text-base">
                Search by keyword, filter by category, or explore all services.
              </p>
            </div>
            <div class="flex flex-wrap gap-3">
              <select
                v-model="selectedCategory"
                class="rounded-full border border-slate-300 bg-white px-4 py-2 text-xs md:text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-shadow"
              >
                <option value="">All categories</option>
                <option v-for="cat in categories" :key="cat" :value="cat">
                  {{ cat }}
                </option>
              </select>
              <button
                type="button"
                class="rounded-full border border-slate-300 px-4 py-2 text-xs md:text-sm text-slate-600 hover:bg-slate-100 hover:border-slate-400 transition-colors"
                @click="clearFilters"
              >
                Clear filters
              </button>
            </div>
          </div>

          <div
            class="animate-on-scroll mt-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 opacity-0 translate-y-8"
          >
            <div class="relative flex-1">
              <span
                class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33l-1.42 1.42l-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                  />
                </svg>
              </span>
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search by name, keyword, or neighborhood..."
                class="w-full rounded-full border border-slate-300 bg-white pl-11 pr-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-shadow"
              />
            </div>
          </div>

          <TransitionGroup
            name="list"
            tag="div"
            class="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3 relative"
          >
            <article
              v-for="resource in filteredResources"
              :key="resource.id"
              class="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <!-- SAVE BUTTON -->
              <button
                @click.stop="toggleSave(resource)"
                class="absolute top-4 right-4 z-10 h-8 w-8 rounded-full bg-slate-50 border border-slate-200 grid place-items-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
                :class="
                  isSaved(resource)
                    ? 'text-red-500 bg-red-50 border-red-100'
                    : 'text-slate-400 hover:text-red-400'
                "
                title="Save to Backpack"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  :fill="isSaved(resource) ? 'currentColor' : 'none'"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  ></path>
                </svg>
              </button>

              <div class="flex items-center justify-between gap-2 pr-8">
                <h3
                  class="font-semibold text-lg text-slate-900 group-hover:text-amber-600 transition-colors"
                >
                  {{ resource.name }}
                </h3>
              </div>

              <div class="mt-2 flex flex-wrap gap-2">
                <span
                  class="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-800"
                >
                  {{ resource.category }}
                </span>
              </div>

              <p class="mt-3 text-sm text-slate-600 line-clamp-3">
                {{ resource.description }}
              </p>

              <dl
                class="mt-4 space-y-2 text-xs text-slate-500 border-t border-slate-100 pt-3"
              >
                <div v-if="resource.address" class="flex gap-2">
                  <dt class="font-semibold min-w-[50px]">Address:</dt>
                  <dd>{{ resource.address }}</dd>
                </div>
                <div v-if="resource.phone" class="flex gap-2">
                  <dt class="font-semibold min-w-[50px]">Phone:</dt>
                  <dd>{{ resource.phone }}</dd>
                </div>
                <div v-if="resource.hours" class="flex gap-2">
                  <dt class="font-semibold min-w-[50px]">Hours:</dt>
                  <dd>{{ resource.hours }}</dd>
                </div>
              </dl>

              <div class="mt-4 flex items-center justify-between gap-3">
                <!-- <a
                  v-if="resource.website"
                  :href="resource.website"
                  target="_blank"
                  rel="noopener"
                  class="text-xs font-semibold text-amber-700 hover:text-amber-900 hover:underline"
                >
                  Visit website →
                </a> -->
                <span
                  v-if="resource.tags && resource.tags.length"
                  class="text-[11px] rounded-full bg-slate-100 px-2 py-1 text-slate-600"
                >
                  {{ resource.tags.slice(0, 2).join(" • ") }}
                </span>
              </div>
            </article>
          </TransitionGroup>

          <div
            v-if="filteredResources.length === 0"
            class="mt-8 text-center text-sm text-slate-500 py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-300"
          >
            No resources match your search yet.
          </div>
        </div>
      </section>

      <!-- HIGHLIGHTS SECTION -->
      <section
        id="highlights"
        class="scroll-section bg-slate-900 text-amber-50 py-16 px-6 md:px-10 lg:px-20 scroll-mt-20"
      >
        <div class="max-w-6xl mx-auto">
          <div
            class="animate-on-scroll flex flex-col md:flex-row md:items-end md:justify-between gap-6 opacity-0 translate-y-8"
          >
            <div>
              <h2 class="text-3xl font-bold">Spotlight: Featured resources</h2>
              <p class="mt-2 text-sm md:text-base text-amber-100/90">
                Programs nominated by students, families, and neighbors.
              </p>
            </div>
          </div>
          <div class="mt-8 grid gap-6 md:grid-cols-3 stagger-container">
            <article
              v-for="resource in featuredResources"
              :key="resource.id"
              class="stagger-item opacity-0 translate-y-8 rounded-2xl bg-slate-800/70 p-5 border border-slate-700/80 hover:bg-slate-800 transition-colors duration-300"
            >
              <h3 class="text-lg font-semibold">{{ resource.name }}</h3>
              <p class="mt-2 text-sm text-amber-100/90">
                {{ resource.highlight }}
              </p>
              <ul class="mt-3 space-y-1 text-xs text-amber-200/85">
                <li>
                  <span class="font-semibold">Impact:</span>
                  {{ resource.impact }}
                </li>
              </ul>
              <!-- <a
                v-if="resource.website"
                :href="resource.website"
                target="_blank"
                rel="noopener"
                class="mt-4 inline-flex text-xs font-semibold text-amber-300 hover:text-white transition-colors"
                >Learn more →</a 
              >-->
            </article>
          </div>
        </div>
      </section>

      <!-- EVENTS -->
      <section
        id="events"
        class="scroll-section py-16 px-6 md:px-10 lg:px-20 bg-amber-50 scroll-mt-20"
      >
        <div class="max-w-6xl mx-auto">
          <div
            class="animate-on-scroll flex flex-col md:flex-row md:items-end md:justify-between gap-6 opacity-0 translate-y-8"
          >
            <div>
              <h2 class="text-3xl font-bold text-slate-900">
                Upcoming community events
              </h2>
              <p class="mt-2 text-slate-600 text-sm md:text-base">
                Workshops, food distributions, and health fairs.
              </p>
            </div>
          </div>
          <div class="mt-8 grid gap-4 md:grid-cols-2 stagger-container">
            <article
              v-for="event in events"
              :key="event.id"
              class="stagger-item opacity-0 translate-y-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div class="flex items-center justify-between gap-3">
                <div>
                  <h3 class="font-semibold text-lg text-slate-900">
                    {{ event.title }}
                  </h3>
                  <p class="mt-1 text-sm text-slate-600">{{ event.host }}</p>
                </div>
                <div class="flex flex-col items-end text-right">
                  <span
                    class="inline-flex items-center rounded-xl bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800"
                    >{{ event.date }}</span
                  >
                  <span class="mt-1 text-[11px] text-slate-500">{{
                    event.time
                  }}</span>
                </div>
              </div>
              <p class="mt-3 text-sm text-slate-600">{{ event.description }}</p>
              <dl class="mt-3 space-y-1 text-xs text-slate-500">
                <div class="flex gap-2">
                  <dt class="font-semibold">Location:</dt>
                  <dd>{{ event.location }}</dd>
                </div>
              </dl>
            </article>
          </div>
        </div>
      </section>

      <!-- SUBMISSION FORM -->
      <!-- <section
        id="submit"
        class="scroll-section py-16 px-6 md:px-10 lg:px-20 bg-slate-900 text-amber-50 scroll-mt-20"
      >
        <div class="max-w-4xl mx-auto">
          <div class="animate-on-scroll opacity-0 translate-y-8">
            <h2 class="text-3xl font-bold">Suggest a new resource</h2>
            <p class="mt-2 text-sm md:text-base text-amber-100/90">
              Share a program or event with the community.
            </p>
          </div>
          <form
            class="animate-on-scroll opacity-0 translate-y-8 mt-8 rounded-2xl bg-slate-800/90 p-6 md:p-8 shadow-xl grid gap-6 md:grid-cols-2"
            @submit.prevent="handleSubmit"
          >
            <div class="md:col-span-2">
              <label
                class="block text-[11px] font-semibold tracking-[0.16em] uppercase text-amber-200 mb-2"
                >Organization Name</label
              >
              <input
                v-model="form.name"
                required
                class="w-full rounded-xl border border-slate-300 bg-white/95 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
              />
            </div>
            <div>
              <label
                class="block text-[11px] font-semibold tracking-[0.16em] uppercase text-amber-200 mb-2"
                >Category</label
              >
              <select
                v-model="form.category"
                required
                class="w-full rounded-xl border border-slate-300 bg-white/95 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
              >
                <option value="" disabled>Select a category</option>
                <option
                  v-for="cat in categories"
                  :key="cat"
                  :value="cat"
                  class="text-slate-900"
                >
                  {{ cat }}
                </option>
              </select>
            </div>
            <div>
              <label
                class="block text-[11px] font-semibold tracking-[0.16em] uppercase text-amber-200 mb-2"
                >Who serves?</label
              >
              <input
                v-model="form.serves"
                class="w-full rounded-xl border border-slate-300 bg-white/95 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
              />
            </div>
            <div>
              <label
                class="block text-[11px] font-semibold tracking-[0.16em] uppercase text-amber-200 mb-2"
                >Website</label
              >
              <input
                v-model="form.website"
                type="url"
                class="w-full rounded-xl border border-slate-300 bg-white/95 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
              />
            </div>
            <div>
              <label
                class="block text-[11px] font-semibold tracking-[0.16em] uppercase text-amber-200 mb-2"
                >Contact</label
              >
              <input
                v-model="form.contact"
                required
                class="w-full rounded-xl border border-slate-300 bg-white/95 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
              />
            </div>
            <div class="md:col-span-2">
              <label
                class="block text-[11px] font-semibold tracking-[0.16em] uppercase text-amber-200 mb-2"
                >Description</label
              >
              <textarea
                v-model="form.description"
                rows="4"
                required
                class="w-full rounded-xl border border-slate-300 bg-white/95 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 resize-none transition-all"
              ></textarea>
            </div>
            <div
              class="md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-2"
            >
              <button
                type="submit"
                class="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg hover:bg-amber-300 hover:scale-105 active:scale-95 transition-all"
              >
                Submit resource
              </button>
            </div>
          </form>
          <p
            v-if="submitted"
            class="mt-4 text-sm text-emerald-300 transition-opacity"
          >
            Thank you! Your resource has been submitted.
          </p>
        </div>
      </section> -->

      <!-- ABOUT (Restored Full Text) -->
      <section
        id="about"
        class="scroll-section py-16 px-6 md:px-10 lg:px-20 bg-amber-50 scroll-mt-20 overflow-hidden"
      >
        <div
          class="max-w-5xl mx-auto grid gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start"
        >
          <div class="animate-on-scroll opacity-0 translate-y-8">
            <h2 class="text-3xl font-bold text-slate-900">About this hub</h2>
            <p class="mt-3 text-sm md:text-base text-slate-700">
              This Community Resource Hub was created by
              <span class="font-semibold">the Harborough community</span>. Our
              goal is to make it easier for residents to connect with local
              support, especially students and families who might not know where
              to start.
            </p>
            <p class="mt-3 text-sm md:text-base text-slate-700">
              We focus on resources that are low-cost or free, within or near
              our community, and open to the public. We verify each listing, but
              details such as hours and eligibility can change—always contact
              organizations directly before visiting.
            </p>

            <ul class="mt-4 grid gap-3 text-sm text-slate-700">
              <li class="flex gap-2">
                <span class="mt-1 h-2.5 w-2.5 rounded-full bg-amber-500"></span>
                <span>
                  <strong>Curated directory:</strong>
                  resources are organized into clear categories with search and
                  filters.
                </span>
              </li>
              <li class="flex gap-2">
                <span
                  class="mt-1 h-2.5 min-w-2.5 rounded-full bg-amber-500"
                ></span>
                <span>
                  <strong>City-built:</strong>
                  designed, researched, and coded by specialists experienced in
                  finding underappreciated resources and presenting them to the
                  community.
                </span>
              </li>
              <li class="flex gap-2">
                <span class="mt-1 h-2.5 w-2.5 rounded-full bg-amber-500"></span>
                <span>
                  <strong>Community-driven:</strong>
                  residents can suggest new resources and events anytime.
                </span>
              </li>
            </ul>
          </div>

          <aside
            class="animate-on-scroll-side opacity-0 translate-x-12 rounded-2xl bg-white shadow-md border border-slate-200 p-5 space-y-4"
          >
            <h3 class="text-lg font-semibold text-slate-900">
              Emergency & crisis contacts
            </h3>
            <p class="text-sm text-slate-700">
              If you or someone you know is in immediate danger, call 911 or
              your local emergency number.
            </p>
            <ul class="space-y-2 text-sm text-slate-700">
              <li>
                <strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text
                988
              </li>
              <li>
                <strong>National Domestic Violence Hotline:</strong>
                1-800-799-SAFE (7233)
              </li>
              <li><strong>Local crisis hotline:</strong> 866-260-8000</li>
            </ul>
            <p class="text-xs text-slate-500">
              These services are not run by this website, but we list them so
              help is always easy to find.
            </p>
          </aside>
        </div>
      </section>
    </main>

    <footer
      class="bg-slate-950 text-slate-300 py-8 px-6 md:px-10 lg:px-20 text-sm"
    >
      <div
        class="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6"
      >
        <div class="space-y-1">
          <p class="font-semibold text-amber-100">
            Harborough Community Resource Hub
          </p>
          <p>
            Created by the
            <span class="font-semibold">Harborough Community</span> • 2025–2026
          </p>
        </div>
        <div class="flex flex-wrap gap-4 text-xs">
          <a href="#directory" class="hover:text-amber-200 transition-colors"
            >Browse</a
          >
          <a href="#events" class="hover:text-amber-200 transition-colors"
            >Events</a
          >
          <NuxtLink
            to="/Addresource"
            class="hover:text-amber-200 transition-colors"
          >
            Suggest
          </NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import gsap from "gsap";

function scrollToSection(id) {
  const targetSection = document.getElementById(id);
  const headerOffset = 80;
  const elementPosition = targetSection.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
}

const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

function toggleChatBot() {
  const chatbot = document.getElementById("chatbot-body");
  chatbot.classList.toggle("hidden");
  chatbot.classList.toggle("absolute");
}
/*const menu1 = [
  "cb-find", 
  "cb-submit",
  "cb-about"
];
const menu2 = [
  "cb-community", 
  "cb-personal", 
  "cb-children", 
  "cb-other", 
  "cb-browse"
];
*/

function startSelection() {
  document.getElementById("chatbot-text").textContent =
    "What are you interested in?";
  document.getElementById("cb-find").style.display = "none";
  document.getElementById("cb-submit").style.display = "none";
  document.getElementById("cb-about").style.display = "none";
  document.getElementById("cb-community").style.display = "block";
  document.getElementById("cb-personal").style.display = "block";
  document.getElementById("cb-children").style.display = "block";
  document.getElementById("cb-other").style.display = "block";
  document.getElementById("cb-browse").style.display = "block";
}

function selectionCommunity() {
  document.getElementById("chatbot-text").textContent =
    "What do you want to help out in?";
  document.getElementById("cb-community").style.display = "none";
  document.getElementById("cb-personal").style.display = "none";
  document.getElementById("cb-children").style.display = "none";
  document.getElementById("cb-other").style.display = "none";
  document.getElementById("cb-browse").style.display = "none";
  document.getElementById("cb-food").style.display = "block";
  document.getElementById("cb-housing").style.display = "block";
}

function selectionPersonal() {
  document.getElementById("chatbot-text").textContent =
    "What do you need help with?";
  document.getElementById("cb-community").style.display = "none";
  document.getElementById("cb-personal").style.display = "none";
  document.getElementById("cb-children").style.display = "none";
  document.getElementById("cb-other").style.display = "none";
  document.getElementById("cb-browse").style.display = "none";
  document.getElementById("cb-health").style.display = "block";
  document.getElementById("cb-career").style.display = "block";
  document.getElementById("cb-foodhelp").style.display = "block";
  document.getElementById("cb-housing").style.display = "block";
}

function resetChatbot() {
  document.getElementById("chatbot-text").textContent =
    "What do you need help with today?";
  const chatbot = document.getElementById("chatbot-body");
  const allElements = document
    .getElementById("chatbot-buttons")
    .querySelectorAll("*");
  allElements.forEach((element) => {
    element.style.display = "none";
  });
  document.getElementById("cb-find").style.display = "block";
  document.getElementById("cb-submit").style.display = "block";
  document.getElementById("cb-about").style.display = "block";
  chatbot.classList.add("hidden");
  chatbot.classList.remove("absolute");
}

// -- BACKPACK LOGIC --
const isBackpackOpen = ref(false);
const savedResources = ref([]);

const toggleSave = (resource) => {
  const index = savedResources.value.findIndex((r) => r.id === resource.id);
  if (index === -1) {
    savedResources.value.push(resource);
  } else {
    savedResources.value.splice(index, 1);
  }
  if (typeof window !== "undefined") {
    localStorage.setItem(
      "community-hub-saves",
      JSON.stringify(savedResources.value)
    );
  }
};

const isSaved = (resource) => {
  return savedResources.value.some((r) => r.id === resource.id);
};

// -- DATA --

const categories = [
  "Food & Groceries",
  "Housing & Shelter",
  "Health & Wellness",
  "Youth & Education",
  "Jobs & Legal Help",
  "Other Support",
];

const resources = ref([
  {
    id: 1,
    name: "Harborough Community Pantry",
    category: "Food & Groceries",
    description:
      "Weekly food distribution for local families, offering fresh produce, canned goods, and baby supplies at no cost.",
    address: "12 High Street, Harborough",
    phone: "(555) 123-4567",
    hours: "Tue & Sat 9:00–11:00 AM",
    website: "#",
    tags: ["Free", "Families", "Emergency"],
  },
  {
    id: 2,
    name: "Harborough Haven Shelter",
    category: "Housing & Shelter",
    description:
      "Emergency overnight shelter and transitional housing support services for individuals and families facing homelessness.",
    address: "45 Elm Avenue, Harborough",
    phone: "(555) 987-6543",
    hours: "Open 24/7",
    website: "#",
    tags: ["Shelter", "Adults", "Families"],
  },
  {
    id: 3,
    name: "St. Mary’s Wellness Centre",
    category: "Health & Wellness",
    description:
      "Low-cost medical visits, flu shots, and mental health counseling for residents without private insurance.",
    address: "10 Oak Boulevard, Harborough",
    phone: "(555) 222-1212",
    hours: "Mon–Fri 8:00 AM–5:00 PM",
    website: "#",
    tags: ["Low-cost", "Medical", "Counseling"],
  },
  {
    id: 4,
    name: "Harborough Youth Hub",
    category: "Youth & Education",
    description:
      "Safe after-school space providing homework help, computer access, and STEM workshops for ages 12-18.",
    address: "Harborough Central Library, 200 School Dr",
    phone: "(555) 765-4321",
    hours: "Mon–Thu 3:30–6:30 PM",
    website: "#",
    tags: ["Students", "Tutoring", "STEM"],
  },
  {
    id: 5,
    name: "Harborough Citizens Legal Aid",
    category: "Jobs & Legal Help",
    description:
      "Free legal clinics covering tenant rights, employment disputes, and family law questions.",
    address: "210 Justice Lane, Harborough",
    phone: "(555) 555-0101",
    hours: "Wed 4:00–7:00 PM",
    website: "#",
    tags: ["Legal", "Free Clinic", "Advice"],
  },
  {
    id: 6,
    name: "River Welland Walk & Talk",
    category: "Other Support",
    description:
      "A weekly guided walking group designed to combat loneliness and improve mental health through connection.",
    address: "Meet at The Square Pavilion",
    phone: "",
    hours: "Sat 8:00–9:00 AM",
    website: "#",
    tags: ["Mental Health", "Community", "Social"],
  },
  {
    id: 7,
    name: "The Daily Bread Kitchen",
    category: "Food & Groceries",
    description:
      "Serving hot, nutritious nutritious meals every evening to anyone in need. No questions asked.",
    address: "88 Coventry Road, Harborough",
    phone: "(555) 333-9999",
    hours: "Daily 5:00–7:00 PM",
    website: "#",
    tags: ["Hot Meals", "No-ID Required"],
  },
  {
    id: 8,
    name: "Pathways Job Corps",
    category: "Jobs & Legal Help",
    description:
      "Resume writing workshops, interview attire provision, and job placement assistance for the unemployed.",
    address: "Harborough Community Centre, Room 3B",
    phone: "(555) 444-8888",
    hours: "Tue/Thu 10:00 AM–2:00 PM",
    website: "#",
    tags: ["Employment", "Training", "Suits"],
  },
  {
    id: 9,
    name: "Tiny Tots Support Circle",
    category: "Youth & Education",
    description:
      "Free diapers, formula, and parenting classes for new mothers and fathers in the Harborough area.",
    address: "15 Maple Lane, Harborough",
    phone: "(555) 777-2222",
    hours: "Mon/Wed 9:00 AM–12:00 PM",
    website: "#",
    tags: ["Babies", "Parents", "Supplies"],
  },
  {
    id: 10,
    name: "Winter Warmth Fund",
    category: "Housing & Shelter",
    description:
      "Assistance with utility bills and heating costs during winter months for qualifying seniors and families.",
    address: "Harborough Town Hall, Main Desk",
    phone: "(555) 666-1111",
    hours: "Mon–Fri 9:00 AM–4:00 PM",
    website: "#",
    tags: ["Utilities", "Financial Aid", "Winter"],
  },
  {
    id: 11,
    name: "Silver Years Connection",
    category: "Other Support",
    description:
      "Transportation services and social events for senior citizens to help them stay independent.",
    address: "Harborough Senior Center, 400 Park Ave",
    phone: "(555) 888-5555",
    hours: "Daily 8:00 AM–6:00 PM",
    website: "#",
    tags: ["Seniors", "Transport", "Social"],
  },
  {
    id: 12,
    name: "Recovery Roads",
    category: "Health & Wellness",
    description:
      "Peer-led support groups for those navigating addiction recovery. Coffee and snacks provided.",
    address: "St. Peter's Hall, Harborough",
    phone: "(555) 999-0000",
    hours: "Thu 7:00–9:00 PM",
    website: "#",
    tags: ["Addiction", "Support Group", "AA/NA"],
  },
]);

const events = ref([
  {
    id: 1,
    title: "Back-to-School Supply Drive",
    host: "Harborough Alliance",
    date: "Aug 15",
    time: "4:00–7:00 PM",
    location: "Harborough Leisure Centre Gym",
    contact: "info@harboroughalliance.org",
    description:
      "Free backpacks, notebooks, uniforms, and stationery for K–12 students in the district.",
  },
  {
    id: 2,
    title: "Annual Community Health Fair",
    host: "St. Mary’s Wellness Centre",
    date: "Sep 10",
    time: "10:00 AM–2:00 PM",
    location: "Welland Park Pavilion",
    contact: "(555) 222-1212",
    description:
      "Free blood pressure checks, flu shots, dental screenings, and mental health resources.",
  },
  {
    id: 3,
    title: "Winter Coat Exchange",
    host: "Harborough Rotary Club",
    date: "Oct 22",
    time: "9:00 AM–1:00 PM",
    location: "The Square (Town Centre)",
    contact: "coats@harboroughrotary.org",
    description:
      "Donate a gently used coat or pick one up for the winter season. Sizes available for all ages.",
  },
  {
    id: 4,
    title: "Resume & Interview Workshop",
    host: "Pathways Job Corps",
    date: "Nov 05",
    time: "6:00–8:00 PM",
    location: "Harborough Public Library",
    contact: "(555) 444-8888",
    description:
      "Professional HR managers review resumes and conduct mock interviews to help you land your next job.",
  },
  {
    id: 5,
    title: "Community Garden Spring Kickoff",
    host: "Green Harborough",
    date: "Mar 12",
    time: "10:00 AM–3:00 PM",
    location: "Harborough Community Gardens",
    contact: "grow@harboroughgreen.org",
    description:
      "Learn how to grow your own vegetables. Seeds, soil, and tools provided for free. Lunch included.",
  },
  {
    id: 6,
    title: "Tenants Rights Town Hall",
    host: "Citizens Legal Aid",
    date: "Feb 18",
    time: "5:30–7:30 PM",
    location: "Harborough Town Hall Auditorium",
    contact: "legal@harborough.gov",
    description:
      "Know your rights regarding eviction, rent increases, and repairs. Free consultation available after.",
  },
]);
// -- LOGIC --
const featuredIds = [1, 3, 4];
const featuredResources = computed(() =>
  resources.value
    .filter((r) => featuredIds.includes(r.id))
    .map((r) => ({
      ...r,
      highlight: r.description,
      impact:
        r.id === 1
          ? "Provides groceries to over 120 families each month."
          : r.id === 3
          ? "Offers low-cost care to residents who lack insurance."
          : "Supports dozens of students with academic and career prep.",
      serves: r.tags ? r.tags.join(", ") : "",
    }))
);

const searchQuery = ref("");
const selectedCategory = ref("");

const filteredResources = computed(() => {
  const q = searchQuery.value.toLowerCase().trim();
  const cat = selectedCategory.value;
  return resources.value.filter((r) => {
    return (
      (!cat || r.category === cat) &&
      (!q ||
        [r.name, r.description, r.address || "", (r.tags || []).join(" ")]
          .join(" ")
          .toLowerCase()
          .includes(q))
    );
  });
});

const clearFilters = () => {
  searchQuery.value = "";
  selectedCategory.value = "";
};
const filterByGuide = (guide) => {
  searchQuery.value = "";
  if (guide === "Food") selectedCategory.value = "Food & Groceries";
  if (guide === "Families") selectedCategory.value = "Housing & Shelter";
  if (guide === "Students") selectedCategory.value = "Youth & Education";
  if (guide === "Seniors" || guide == "Health")
    selectedCategory.value = "Health & Wellness";
  if (guide === "Job") selectedCategory.value = "Jobs & Legal Help";
  if (guide === "Other") selectedCategory.value = "Other Support";
  if (guide === "Everyone") selectedCategory.value = "";
  scrollToSection("directory");
};

const form = ref({
  name: "",
  category: "",
  serves: "",
  website: "",
  contact: "",
  description: "",
});
const submitted = ref(false);
const handleSubmit = () => {
  submitted.value = true;
  form.value = {
    name: "",
    category: "",
    serves: "",
    website: "",
    contact: "",
    description: "",
  };
  setTimeout(() => {
    submitted.value = false;
  }, 5000);
};

// -- ANIMATION --
const heroBg = ref(null);
const quickFilters = ref(null);

onMounted(() => {
  if (typeof window !== "undefined") {
    const saves = localStorage.getItem("community-hub-saves");
    if (saves) savedResources.value = JSON.parse(saves);
  }

  window.addEventListener("scroll", handleScroll);

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  tl.to(heroBg.value, { scale: 1.05, duration: 15, ease: "none" }, 0);
  tl.to(".hero-elem", { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 }, 0.4);
  tl.to(
    quickFilters.value,
    { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.5)" },
    "-=0.3"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const standardElems =
            entry.target.querySelectorAll(".animate-on-scroll");
          if (standardElems.length)
            gsap.to(standardElems, {
              y: 0,
              opacity: 1,
              duration: 0.7,
              stagger: 0.1,
              ease: "power2.out",
            });
          const staggerItems = entry.target.querySelectorAll(".stagger-item");
          if (staggerItems.length)
            gsap.to(staggerItems, {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.1,
              delay: 0.1,
              ease: "power2.out",
            });
          const sideItems = entry.target.querySelectorAll(
            ".animate-on-scroll-side"
          );
          if (sideItems.length)
            gsap.to(sideItems, {
              x: 0,
              opacity: 1,
              duration: 1,
              delay: 0.2,
              ease: "power3.out",
            });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
  );
  document
    .querySelectorAll(".scroll-section")
    .forEach((s) => observer.observe(s));
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.4s cubic-bezier(0.55, 0, 0.1, 1);
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
