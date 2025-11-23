<template>
  <div class="min-h-screen bg-amber-50 text-slate-900 overflow-x-hidden">
    <!-- HERO -->
    <header class="relative h-screen overflow-hidden">
      <!-- Background -->
      <img
        src="/assets/img/TopIMG.jpg"
        alt="Community skyline"
        class="absolute inset-0 h-full w-full object-cover"
      />
      <div
        class="absolute inset-0 bg-linear-to-b from-slate-900/80 via-slate-900/40 to-amber-50/95"
      ></div>

      <!-- NAVBAR -->
      <nav
        class="relative z-20 flex items-center justify-between px-6 md:px-10 py-4 text-sm font-medium text-amber-50"
      >
        <div class="flex items-center gap-3">
          <div
            class="h-9 w-9 rounded-full bg-amber-400/90 grid place-items-center text-slate-900 font-black text-lg shadow-md"
          >
            CH
          </div>
          <div class="leading-tight">
            <p class="text-xs uppercase tracking-[0.25em] text-amber-200">
              Community
            </p>
            <p class="text-sm font-semibold">Resource Hub</p>
          </div>
        </div>

        <div class="hidden md:flex items-center gap-6">
          <div
            @click="scrollToSection('directory')"
            class="nav-link hover:cursor-pointer"
          >
            Resources
          </div>
          <div
            @click="scrollToSection('highlights')"
            class="nav-link hover:cursor-pointer"
          >
            Highlights
          </div>
          <div
            @click="scrollToSection('events')"
            class="nav-link hover:cursor-pointer"
          >
            Events
          </div>
          <div
            @click="scrollToSection('submit')"
            class="nav-link hover:cursor-pointer"
          >
            Add a Resource
          </div>
          <div
            @click="scrollToSection('about')"
            class="nav-link hover:cursor-pointer"
          >
            About
          </div>
        </div>

        <div
          @click="scrollToSection('directory')"
          class="hidden hover:cursor-pointer md:inline-flex rounded-full bg-amber-400 px-5 py-2 text-xs font-semibold text-slate-900 shadow-lg hover:bg-amber-300 transition"
        >
          Find Help
        </div>
      </nav>

      <!-- HERO -->
      <div
        class="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-amber-50"
      >
        <p
          class="mb-3 text-[11px] uppercase tracking-[0.35em] text-amber-200/90"
        >
          Welcome to
        </p>
        <h1
          class="max-w-4xl text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
        >
          <span class="block">Coppell Community Resource Hub</span>
        </h1>
        <p
          class="mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-amber-100/90"
        >
          One place to find local food, housing, health, education, and support
          services—curated for residents, students, and families.
        </p>

        <div class="mt-6 flex flex-wrap items-center justify-center gap-3">
          <div
            @click="scrollToSection('directory')"
            class="hover:cursor-pointer rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg hover:bg-amber-300 transition"
          >
            Browse Resources
          </div>
          <div
            @click="scrollToSection('submit')"
            class="hover:cursor-pointer rounded-full border border-amber-200/70 px-6 py-3 text-sm font-semibold text-amber-50 hover:bg-amber-50/10 transition"
          >
            Suggest a Resource
          </div>
        </div>

        <!-- QUICK FILTER -->
        <div class="mt-10 w-full flex justify-center px-4">
          <div
            class="flex flex-wrap items-center justify-center gap-3 rounded-full bg-slate-900/55 px-6 py-3 backdrop-blur-lg shadow-2xl max-w-4xl"
          >
            <button
              v-for="cat in categories"
              :key="cat"
              type="button"
              class="quick-chip"
              @click="selectedCategory = cat"
            >
              {{ cat }}
            </button>
          </div>
        </div>
      </div>
    </header>

    <main>
      <!-- DIRECTORY SECTION -->
      <section
        id="directory"
        class="py-16 px-6 md:px-10 lg:px-20 bg-amber-50 scroll-mt-16"
      >
        <div class="max-w-6xl mx-auto">
          <div
            class="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <div>
              <h2 class="text-3xl font-bold text-slate-900">
                Find community resources
              </h2>
              <p class="mt-2 text-slate-600 text-sm md:text-base">
                Search by keyword, filter by category, or explore all services
                in our directory.
              </p>
            </div>
            <div class="flex flex-wrap gap-3">
              <select
                v-model="selectedCategory"
                class="rounded-full border border-slate-300 bg-white px-4 py-2 text-xs md:text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option value="">All categories</option>
                <option v-for="cat in categories" :key="cat" :value="cat">
                  {{ cat }}
                </option>
              </select>
              <button
                type="button"
                class="rounded-full border border-slate-300 px-4 py-2 text-xs md:text-sm text-slate-600 hover:bg-slate-100"
                @click="clearFilters"
              >
                Clear filters
              </button>
            </div>
          </div>

          <div
            class="mt-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
          >
            <div class="relative flex-1">
              <span
                class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2"
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
                class="w-full rounded-full border border-slate-300 bg-white pl-11 pr-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
          </div>

          <!-- Resource cards -->
          <div class="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <article
              v-for="resource in filteredResources"
              :key="resource.id"
              class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <div class="flex items-center justify-between gap-2">
                <h3 class="font-semibold text-lg text-slate-900">
                  {{ resource.name }}
                </h3>
                <span
                  class="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-800"
                >
                  {{ resource.category }}
                </span>
              </div>
              <p class="mt-2 text-sm text-slate-600">
                {{ resource.description }}
              </p>

              <dl class="mt-3 space-y-1 text-xs text-slate-500">
                <div v-if="resource.address" class="flex gap-2">
                  <dt class="font-semibold">Address:</dt>
                  <dd>{{ resource.address }}</dd>
                </div>
                <div v-if="resource.phone" class="flex gap-2">
                  <dt class="font-semibold">Phone:</dt>
                  <dd>{{ resource.phone }}</dd>
                </div>
                <div v-if="resource.hours" class="flex gap-2">
                  <dt class="font-semibold">Hours:</dt>
                  <dd>{{ resource.hours }}</dd>
                </div>
              </dl>

              <div class="mt-4 flex items-center justify-between gap-3">
                <a
                  v-if="resource.website"
                  :href="resource.website"
                  target="_blank"
                  rel="noopener"
                  class="text-xs font-semibold text-amber-700 hover:text-amber-900"
                >
                  Visit website →
                </a>
                <span
                  v-if="resource.tags && resource.tags.length"
                  class="text-[11px] rounded-full bg-slate-100 px-2 py-1 text-slate-600"
                >
                  {{ resource.tags.join(" • ") }}
                </span>
              </div>
            </article>

            <p
              v-if="filteredResources.length === 0"
              class="text-sm text-slate-500 col-span-full"
            >
              No resources match your search yet. Try another term or suggest a
              new resource below.
            </p>
          </div>
        </div>
      </section>

      <!-- HIGHLIGHTS SECTION -->
      <section
        id="highlights"
        class="bg-slate-900 text-amber-50 py-16 px-6 md:px-10 lg:px-20 scroll-mt-16"
      >
        <div class="max-w-6xl mx-auto">
          <div
            class="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <div>
              <h2 class="text-3xl font-bold">
                Spotlight: Featured community resources
              </h2>
              <p class="mt-2 text-sm md:text-base text-amber-100/90">
                These programs were nominated by students, families, and
                neighbors.
              </p>
            </div>
            <p class="text-xs max-w-xs text-amber-200/80">
              Want to nominate a resource to be featured here? Use the form
              below or speak with us.
            </p>
          </div>

          <div class="mt-8 grid gap-6 md:grid-cols-3">
            <article
              v-for="resource in featuredResources"
              :key="resource.id"
              class="rounded-2xl bg-slate-800/70 p-5 border border-slate-700/80"
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
                <li v-if="resource.serves">
                  <span class="font-semibold">Serves:</span>
                  {{ resource.serves }}
                </li>
              </ul>
              <a
                v-if="resource.website"
                :href="resource.website"
                target="_blank"
                rel="noopener"
                class="mt-4 inline-flex text-xs font-semibold text-amber-300 hover:text-white"
              >
                Learn more →
              </a>
            </article>
          </div>
        </div>
      </section>

      <!-- EVENTS -->
      <section
        id="events"
        class="py-16 px-6 md:px-10 lg:px-20 bg-amber-50 scroll-mt-16"
      >
        <div class="max-w-6xl mx-auto">
          <div
            class="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <div>
              <h2 class="text-3xl font-bold text-slate-900">
                Upcoming community events
              </h2>
              <p class="mt-2 text-slate-600 text-sm md:text-base">
                Workshops, food distributions, health fairs, and more hosted by
                our partner organizations.
              </p>
            </div>
            <p class="text-xs text-slate-500 max-w-xs">
              Times and details may change. Use the contact information to
              confirm with each organization.
            </p>
          </div>

          <div class="mt-8 grid gap-4 md:grid-cols-2">
            <article
              v-for="event in events"
              :key="event.id"
              class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
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
                  >
                    {{ event.date }}
                  </span>
                  <span class="mt-1 text-[11px] text-slate-500">
                    {{ event.time }}
                  </span>
                </div>
              </div>
              <p class="mt-3 text-sm text-slate-600">
                {{ event.description }}
              </p>
              <dl class="mt-3 space-y-1 text-xs text-slate-500">
                <div class="flex gap-2">
                  <dt class="font-semibold">Location:</dt>
                  <dd>{{ event.location }}</dd>
                </div>
                <div v-if="event.contact" class="flex gap-2">
                  <dt class="font-semibold">Contact:</dt>
                  <dd>{{ event.contact }}</dd>
                </div>
              </dl>
            </article>
          </div>
        </div>
      </section>

      <!-- SUBMISSION FORM -->
      <section
        id="submit"
        class="py-16 px-6 md:px-10 lg:px-20 bg-slate-900 text-amber-50 scroll-mt-16"
      >
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold">Suggest a new resource</h2>
          <p class="mt-2 text-sm md:text-base text-amber-100/90">
            Know a non-profit, support program, or event that should be listed
            here? Share it and our team will review it.
          </p>

          <form
            class="mt-8 rounded-2xl bg-slate-800/90 p-6 md:p-8 shadow-xl grid gap-6 md:grid-cols-2"
            @submit.prevent="handleSubmit"
          >
            <div class="md:col-span-2">
              <label
                class="block text-[11px] font-semibold tracking-[0.16em] uppercase text-amber-200 mb-2"
              >
                Organization / program name
              </label>
              <input
                v-model="form.name"
                required
                class="w-full rounded-xl border border-slate-300 bg-white/95 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
              />
            </div>

            <div>
              <label
                class="block text-[11px] font-semibold tracking-[0.16em] uppercase text-amber-200 mb-2"
              >
                Category
              </label>
              <select
                v-model="form.category"
                required
                class="w-full rounded-xl border border-slate-300 bg-white/95 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
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
              >
                Who does it serve?
              </label>
              <input
                v-model="form.serves"
                placeholder="e.g., teens, families, seniors"
                class="w-full rounded-xl border border-slate-300 bg-white/95 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
              />
            </div>

            <div>
              <label
                class="block text-[11px] font-semibold tracking-[0.16em] uppercase text-amber-200 mb-2"
              >
                Website (optional)
              </label>
              <input
                v-model="form.website"
                type="url"
                placeholder="https://example.org"
                class="w-full rounded-xl border border-slate-300 bg-white/95 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
              />
            </div>

            <div>
              <label
                class="block text-[11px] font-semibold tracking-[0.16em] uppercase text-amber-200 mb-2"
              >
                Contact email or phone
              </label>
              <input
                v-model="form.contact"
                required
                class="w-full rounded-xl border border-slate-300 bg-white/95 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
              />
            </div>

            <div class="md:col-span-2">
              <label
                class="block text-[11px] font-semibold tracking-[0.16em] uppercase text-amber-200 mb-2"
              >
                Short description
              </label>
              <textarea
                v-model="form.description"
                rows="4"
                required
                class="w-full rounded-xl border border-slate-300 bg-white/95 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 resize-none"
              ></textarea>
            </div>

            <div
              class="md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-2"
            >
              <p class="text-xs text-amber-200/80">
                Submissions are reviewed before being published.
              </p>
              <button
                type="submit"
                class="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg hover:bg-amber-300 transition"
              >
                Submit resource
              </button>
            </div>
          </form>

          <p
            v-if="submitted"
            class="mt-4 text-sm text-emerald-300 transition-opacity"
          >
            Thank you! Your resource has been submitted. We’ll review it and add
            it soon if it meets our criteria.
          </p>
        </div>
      </section>

      <!-- ABOUT / EXTRA CONTENT -->
      <section
        id="about"
        class="py-16 px-6 md:px-10 lg:px-20 bg-amber-50 scroll-mt-16"
      >
        <div
          class="max-w-5xl mx-auto grid gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start"
        >
          <div>
            <h2 class="text-3xl font-bold text-slate-900">About this hub</h2>
            <p class="mt-3 text-sm md:text-base text-slate-700">
              This Community Resource Hub was created by
              <span class="font-semibold">Names</span> Our goal is to make it
              easier for residents to connect with local support, especially
              students and families who might not know where to start.
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
                <span class="mt-1 h-2.5 w-2.5 rounded-full bg-amber-500"></span>
                <span>
                  <strong>Student-built:</strong>
                  designed, researched, and coded by students using Nuxt and
                  Tailwind CSS.
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
            class="rounded-2xl bg-white shadow-md border border-slate-200 p-5 space-y-4"
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
              <li>
                <strong>Local crisis hotline:</strong> [Add local number here]
              </li>
            </ul>
            <p class="text-xs text-slate-500">
              These services are not run by this website, but we list them so
              help is always easy to find.
            </p>
          </aside>
        </div>
      </section>
    </main>

    <!-- FOOTER -->
    <footer
      class="bg-slate-950 text-slate-300 py-8 px-6 md:px-10 lg:px-20 text-sm"
    >
      <div
        class="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6"
      >
        <div class="space-y-1">
          <p class="font-semibold text-amber-100">
            Coppell Community Resource Hub
          </p>
          <p>
            Created by the <span class="font-semibold">Names</span> • 2025–2026
          </p>
          <p class="text-xs text-slate-400">
            Information is subject to change. Always contact organizations
            directly to confirm details.
          </p>
        </div>
        <div class="flex flex-wrap gap-4 text-xs">
          <a href="#directory" class="hover:text-amber-200">Browse resources</a>
          <a href="#events" class="hover:text-amber-200">View events</a>
          <a href="#submit" class="hover:text-amber-200">Suggest a resource</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
function scrollToSection(id) {
  const targetSection = document.getElementById(id);
  targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

// CATEGORIES
const categories = [
  "Food & Groceries",
  "Housing & Shelter",
  "Health & Wellness",
  "Youth & Education",
  "Jobs & Legal Help",
  "Other Support",
];

// DIRECTORY DATA
const resources = ref([
  {
    id: 1,
    name: "Community Food Pantry",
    category: "Food & Groceries",
    description:
      "Weekly food distribution for local families, with fresh produce and pantry staples at no cost.",
    address: "123 Main St, [City], ST",
    phone: "(555) 123-4567",
    hours: "Sat 9:00–11:00 AM",
    website: "#",
    tags: ["Free", "Families", "Emergency"],
  },
  {
    id: 2,
    name: "Hope Housing Center",
    category: "Housing & Shelter",
    description:
      "Short-term shelter and housing support services for individuals and families experiencing homelessness.",
    address: "45 Elm Ave, [City], ST",
    phone: "(555) 987-6543",
    hours: "Open 24/7",
    website: "#",
    tags: ["Shelter", "Adults", "Families"],
  },
  {
    id: 3,
    name: "Neighborhood Health Clinic",
    category: "Health & Wellness",
    description:
      "Low-cost medical visits, vaccines, and mental health counseling for residents without regular care.",
    address: "10 Oak Blvd, [City], ST",
    phone: "(555) 222-1212",
    hours: "Mon–Fri 8:00 AM–5:00 PM",
    website: "#",
    tags: ["Low-cost", "Medical", "Counseling"],
  },
  {
    id: 4,
    name: "Youth Learning Lab",
    category: "Youth & Education",
    description:
      "After-school tutoring and STEM workshops for middle and high school students.",
    address: "High School Library, 200 School Dr",
    phone: "(555) 765-4321",
    hours: "Mon–Thu 3:30–6:00 PM",
    website: "#",
    tags: ["Students", "Tutoring", "STEM"],
  },
  {
    id: 5,
    name: "Community Legal Aid",
    category: "Jobs & Legal Help",
    description:
      "Free legal clinics for housing, employment, and immigration questions.",
    address: "210 Justice Ln, [City], ST",
    phone: "(555) 555-0101",
    hours: "Wed 4:00–7:00 PM",
    website: "#",
    tags: ["Legal", "Free Clinic"],
  },
  {
    id: 6,
    name: "Neighborhood Wellness Walk",
    category: "Other Support",
    description:
      "Weekly community walk and check-in focused on mental health and connection.",
    address: "Meet at City Park Pavilion",
    phone: "",
    hours: "Sat 8:00–9:00 AM",
    website: "#",
    tags: ["Mental Health", "Community"],
  },
]);

// FEATURED RESOURCES
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

// EVENTS
const events = ref([
  {
    id: 1,
    title: "Back-to-School Supply Drive",
    host: "Neighborhood Alliance",
    date: "Aug 15",
    time: "4:00–7:00 PM",
    location: "[School] Gym",
    contact: "info@neighborhoodalliance.org",
    description:
      "Free backpacks, notebooks, and supplies for K–12 students. First come, first served.",
  },
  {
    id: 2,
    title: "Community Health Fair",
    host: "Neighborhood Health Clinic",
    date: "Sep 10",
    time: "10:00 AM–2:00 PM",
    location: "City Park Pavilion",
    contact: "(555) 222-1212",
    description:
      "Blood pressure checks, flu shots, mental health resources, and wellness activities.",
  },
  {
    id: 3,
    title: "Job Search & Resume Workshop",
    host: "Community Legal Aid",
    date: "Sep 22",
    time: "5:30–7:30 PM",
    location: "Public Library Meeting Room",
    contact: "(555) 555-0101",
    description:
      "One-on-one resume help, interview tips, and information about worker rights.",
  },
  {
    id: 4,
    title: "Youth STEM Night",
    host: "Youth Learning Lab",
    date: "Oct 3",
    time: "6:00–8:00 PM",
    location: "[School] Innovation Lab",
    contact: "stem@learninglab.org",
    description:
      "Hands-on robotics and coding activities for middle and high school students.",
  },
]);

// SEARCH
const searchQuery = ref("");
const selectedCategory = ref("");

const filteredResources = computed(() => {
  const q = searchQuery.value.toLowerCase().trim();
  const cat = selectedCategory.value;

  return resources.value.filter((r) => {
    const matchesCategory = !cat || r.category === cat;

    const haystack = [
      r.name,
      r.description,
      r.address || "",
      (r.tags || []).join(" "),
    ]
      .join(" ")
      .toLowerCase();

    const matchesQuery = !q || haystack.includes(q);
    return matchesCategory && matchesQuery;
  });
});

const clearFilters = () => {
  searchQuery.value = "";
  selectedCategory.value = "";
};

// SUBMISSION FORM
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
  console.log("New resource submission:", form.value);

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
</script>

<style scoped>
/* .nav-link {
  @apply text-xs md:text-sm hover:text-amber-200 transition;
}

.quick-chip {
  @apply rounded-full border border-amber-200/60 bg-slate-900/40 px-4 py-1.5 text-[11px] font-semibold text-amber-100 hover:bg-amber-400 hover:text-slate-900 transition;
}

.form-label {
  @apply block text-[11px] font-semibold tracking-[0.15em] uppercase text-amber-200 mb-1.5;
}

.form-input {
  @apply w-full rounded-xl border border-slate-500/60 bg-slate-900/40 px-3 py-2.5 text-sm text-amber-50 placeholder:text-amber-200/50 focus:outline-none focus:ring-2 focus:ring-amber-400/80 focus:border-amber-400/80;
} */
</style>
