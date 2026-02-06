<template>
  <div
    class="min-h-screen bg-amber-50 font-sans text-slate-900 selection:bg-amber-300 selection:text-slate-900"
  >
    <nav
      class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 transition-all duration-300 print:hidden"
      :class="[
        isScrolled
          ? 'py-3 bg-slate-950/90 backdrop-blur-md shadow-lg border-b border-white/5'
          : 'py-6 bg-slate-900',
      ]"
    >
      <div class="flex items-center gap-3 cursor-pointer group z-20">
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

      <div
        class="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-6 font-medium text-amber-50"
      >
        <NuxtLink
          to="/"
          class="nav-link hover:text-amber-300 transition-colors"
          :class="{ 'drop-shadow-sm': !isScrolled }"
          >Home</NuxtLink
        >
        <NuxtLink
          to="/guides"
          class="nav-link hover:text-amber-300 transition-colors"
          :class="{ 'drop-shadow-sm': !isScrolled }"
          >Guides</NuxtLink
        >
        <NuxtLink
          to="/Connect"
          class="nav-link text-amber-300 font-bold drop-shadow-sm"
          >Connect</NuxtLink
        >
        <NuxtLink
          to="/Addresource"
          class="nav-link hover:text-amber-300 transition-colors"
          :class="{ 'drop-shadow-sm': !isScrolled }"
          >Add Resource</NuxtLink
        >
        <NuxtLink
          to="/About"
          class="nav-link hover:text-amber-300 transition-colors"
          :class="{ 'drop-shadow-sm': !isScrolled }"
          >About</NuxtLink
        >
      </div>

      <div class="flex items-center gap-3 w-10"></div>

      <div
        :style="{ width: sideWidth }"
        class="h-screen w-0 fixed z-10 top-0 left-0 bg-slate-800 overflow-x-hidden pt-10 duration-400 md:hidden"
      >
        <div class="flex flex-col ml-10 text-amber-50 mt-15 gap-5 text-xl">
          <NuxtLink
            to="/"
            class="nav-link hover:text-amber-300 transition-colors"
            >Home</NuxtLink
          >
          <NuxtLink
            to="/guides"
            class="nav-link hover:text-amber-300 transition-colors"
            >Guides</NuxtLink
          >
          <NuxtLink to="/Connect" class="nav-link text-amber-300"
            >Connect</NuxtLink
          >
          <NuxtLink
            to="/Addresource"
            class="nav-link hover:text-amber-300 transition-colors"
            >Add Resource</NuxtLink
          >
          <NuxtLink
            to="/About"
            class="nav-link hover:text-amber-300 transition-colors"
            >About</NuxtLink
          >
        </div>
      </div>
    </nav>

    <div class="pt-24 pb-4 px-4 bg-slate-900">
      <div
        class="max-w-4xl mx-auto bg-red-500/10 border border-red-500/50 rounded-lg p-3 flex flex-col md:flex-row items-center justify-center gap-2 text-red-200 text-xs md:text-sm text-center"
      >
        <font-awesome-icon icon="fa-solid fa-triangle-exclamation" />
        <span class="font-bold">In immediate danger?</span>
        <span
          >Call 911 or the National Crisis Line at 988. This page is for
          non-emergency scheduling.</span
        >
      </div>
    </div>

    <header
      class="relative px-6 pb-16 pt-8 bg-slate-900 text-amber-50 overflow-hidden"
    >
      <div class="relative z-10 max-w-4xl mx-auto text-center">
        <div
          class="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6 animate-elem opacity-0 translate-y-4"
        >
          <span class="text-amber-400">★</span>
          <span
            class="text-xs font-bold uppercase tracking-widest text-amber-50"
            >100% Free Service</span
          >
        </div>

        <h1
          class="text-3xl md:text-5xl font-extrabold mb-4 animate-elem opacity-0 translate-y-4 leading-tight"
        >
          Speak with a
          <span class="text-amber-400 relative inline-block">
            Specialist
            <svg
              class="absolute w-full h-3 -bottom-1 left-0 text-amber-400/30"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q 50 10 100 5"
                stroke="currentColor"
                stroke-width="3"
                fill="none"
              />
            </svg>
          </span>
        </h1>
        <p
          class="text-slate-300 max-w-2xl mx-auto mb-8 animate-elem opacity-0 translate-y-4 text-sm md:text-base"
        >
          Connect directly with verified volunteers and professionals. Whether
          you need legal advice, translation, or a listening ear, our community
          is here to help at no cost to you.
        </p>

        <div
          class="flex flex-wrap justify-center gap-2 animate-elem opacity-0 translate-y-4"
        >
          <button
            v-for="role in roles"
            :key="role"
            @click="selectedRole = selectedRole === role ? '' : role"
            class="px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300"
            :class="
              selectedRole === role
                ? 'bg-amber-400 border-amber-400 text-slate-900 scale-105'
                : 'border-slate-700 text-slate-300 hover:border-amber-400/50 hover:text-white'
            "
          >
            {{ role }}
          </button>
        </div>
      </div>

      <div
        class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-20"
      >
        <div
          class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-slate-800 to-transparent"
        ></div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto">
      <div
        class="relative -mt-8 mx-6 mb-12 bg-white rounded-2xl shadow-xl border border-slate-100 p-6 flex flex-wrap justify-around items-center gap-6 z-20 animate-fade-up"
      >
        <div class="text-center">
          <p class="text-xs text-slate-500 uppercase tracking-wide font-bold">
            Avg. Response Time
          </p>
          <p class="text-2xl font-black text-amber-500">~15 Min</p>
        </div>
        <div class="hidden md:block w-px h-10 bg-slate-200"></div>
        <div class="text-center">
          <p class="text-xs text-slate-500 uppercase tracking-wide font-bold">
            Volunteers Online
          </p>
          <p class="text-2xl font-black text-slate-900">12</p>
        </div>
        <div class="hidden md:block w-px h-10 bg-slate-200"></div>
        <div class="text-center">
          <p class="text-xs text-slate-500 uppercase tracking-wide font-bold">
            People Helped
          </p>
          <p class="text-2xl font-black text-slate-900">4,102</p>
        </div>
        <div class="hidden md:block w-px h-10 bg-slate-200"></div>
        <div class="text-center">
          <p class="text-xs text-slate-500 uppercase tracking-wide font-bold">
            User Cost
          </p>
          <p class="text-2xl font-black text-green-600">$0.00</p>
        </div>
      </div>

      <section class="py-6 px-6 border-b border-slate-200">
        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          <div class="animate-elem opacity-0 translate-y-4">
            <div
              class="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4"
            >
              1
            </div>
            <h3 class="font-bold text-slate-900">Find a Specialist</h3>
            <p class="text-sm text-slate-600 mt-2">
              Browse the list below. Filter by language or expertise to find the
              right match.
            </p>
          </div>
          <div
            class="animate-elem opacity-0 translate-y-4"
            style="transition-delay: 100ms"
          >
            <div
              class="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4"
            >
              2
            </div>
            <h3 class="font-bold text-slate-900">Send a Request</h3>
            <p class="text-sm text-slate-600 mt-2">
              Click "Chat" or "Schedule." Your details are encrypted and sent
              securely.
            </p>
          </div>
          <div
            class="animate-elem opacity-0 translate-y-4"
            style="transition-delay: 200ms"
          >
            <div
              class="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4"
            >
              3
            </div>
            <h3 class="font-bold text-slate-900">Get Free Help</h3>
            <p class="text-sm text-slate-600 mt-2">
              Connect one-on-one. No insurance, ID, or payment is ever required.
            </p>
          </div>
        </div>
      </section>

      <section class="px-6 py-12 bg-slate-50">
        <TransitionGroup
          name="list"
          tag="div"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <article
            v-for="person in filteredSpecialists"
            :key="person.id"
            class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
          >
            <div class="flex justify-between items-start mb-4">
              <div class="flex items-center gap-4">
                <div
                  class="h-14 w-14 rounded-full bg-slate-100 border-2 border-white shadow-md flex items-center justify-center text-2xl overflow-hidden relative font-bold text-slate-400"
                >
                  <span v-if="!person.image">{{ person.initials }}</span>
                  <img
                    v-else
                    :src="person.image"
                    class="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 class="font-bold text-lg text-slate-900 leading-tight">
                    {{ person.name }}
                  </h3>
                  <p
                    class="text-xs font-semibold text-amber-600 uppercase tracking-wider"
                  >
                    {{ person.role }}
                  </p>
                </div>
              </div>

              <div
                class="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border"
                :class="
                  person.available
                    ? 'bg-green-50 text-green-700 border-green-200'
                    : 'bg-slate-50 text-slate-500 border-slate-200'
                "
              >
                <div
                  class="h-2 w-2 rounded-full"
                  :class="
                    person.available
                      ? 'bg-green-500 animate-pulse'
                      : 'bg-slate-400'
                  "
                ></div>
                {{ person.available ? "Online Now" : "By Appt" }}
              </div>
            </div>

            <p class="text-slate-600 text-sm mb-4 grow">
              {{ person.bio }}
            </p>

            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="lang in person.languages"
                :key="lang"
                class="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-600 rounded border border-slate-200"
              >
                {{ lang }}
              </span>
            </div>

            <button
              @click="openConnectModal(person)"
              class="w-full py-3 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2"
              :class="
                person.available
                  ? 'bg-amber-400 text-slate-900 hover:bg-amber-300 shadow-md shadow-amber-400/20'
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              "
            >
              <span v-if="person.available">Chat Request</span>
              <span v-else>Schedule Appointment</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </article>
        </TransitionGroup>

        <div v-if="filteredSpecialists.length === 0" class="text-center py-20">
          <div
            class="inline-block p-4 rounded-full bg-slate-100 text-slate-400 mb-4"
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
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <p class="text-slate-500">No specialists found for that category.</p>
          <button
            @click="selectedRole = ''"
            class="text-amber-600 font-bold text-sm mt-2 hover:underline"
          >
            Clear filters
          </button>
        </div>
      </section>

      <section class="py-16 px-6 bg-white border-t border-slate-200">
        <div class="max-w-4xl mx-auto">
          <div class="flex items-center gap-3 mb-6">
            <div class="bg-amber-100 p-2 rounded-lg text-amber-600">
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
                  d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                ></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-slate-900">
                Instant Resources
              </h2>
              <p class="text-sm text-slate-500">
                Don't want to talk? Download these free guides and templates
                immediately.
              </p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div
              v-for="dl in downloads"
              :key="dl.title"
              class="group flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 transition-colors cursor-pointer"
            >
              <div class="flex items-center gap-4">
                <div
                  class="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 group-hover:bg-amber-100 group-hover:text-amber-700 transition-colors"
                >
                  <span class="text-xs font-bold">PDF</span>
                </div>
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">
                    {{ dl.title }}
                  </h4>
                  <p class="text-xs text-slate-500">{{ dl.desc }}</p>
                </div>
              </div>
              <svg
                class="text-slate-300 group-hover:text-amber-500 transition-colors"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-slate-950 text-slate-400 py-8 px-6 text-center text-xs">
      <p class="mb-2">&copy; 2026 Harborough Community Resource Hub</p>
      <p class="opacity-50">
        All services listed on this page are provided pro-bono by community
        volunteers.
      </p>
    </footer>

    <div
      v-if="showModal"
      class="fixed inset-0 z-100 flex items-center justify-center p-4"
    >
      <div
        class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        @click="closeModal"
      ></div>

      <div
        class="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl animate-fade-up border border-white/20"
      >
        <button
          @click="closeModal"
          class="absolute top-4 right-4 text-slate-400 hover:text-slate-900"
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
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div v-if="!formSubmitted">
          <div class="flex items-center gap-3 mb-2">
            <div
              class="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-xs font-bold"
            >
              {{ targetSpecialist?.initials }}
            </div>
            <h2 class="text-xl font-bold text-slate-900">
              Connect with {{ targetSpecialist?.name }}
            </h2>
          </div>

          <p
            class="text-sm text-slate-500 mb-6 bg-slate-50 p-3 rounded-lg border border-slate-100"
          >
            {{
              targetSpecialist?.available
                ? "This user is online. Requests are usually answered within 15 minutes."
                : "Send a message to schedule a time. They usually reply within 24 hours."
            }}
          </p>

          <form @submit.prevent="submitForm" class="space-y-4">
            <div>
              <label
                class="block text-xs font-bold text-slate-700 mb-1 uppercase"
                >Your Name (Or Alias)</label
              >
              <input
                type="text"
                required
                class="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            <div>
              <label
                class="block text-xs font-bold text-slate-700 mb-1 uppercase"
                >Contact Method</label
              >
              <input
                type="text"
                placeholder="Email or Phone Number"
                required
                class="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            <div>
              <label
                class="block text-xs font-bold text-slate-700 mb-1 uppercase"
                >How can they help?</label
              >
              <textarea
                rows="3"
                required
                placeholder="Briefly describe your situation..."
                class="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors"
              ></textarea>
            </div>

            <div
              class="bg-blue-50 text-blue-800 text-xs p-3 rounded-lg flex gap-2 items-start"
            >
              <svg
                class="w-4 h-4 shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                />
              </svg>
              <p>Your information is encrypted. This service is 100% free.</p>
            </div>

            <button
              type="submit"
              class="w-full bg-slate-900 text-white font-bold py-3.5 rounded-xl hover:bg-slate-800 transition-transform active:scale-95"
            >
              Send Secure Request
            </button>
          </form>
        </div>

        <div v-else class="text-center py-8">
          <div
            class="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900">Request Sent!</h3>
          <p class="text-slate-600 mt-2 text-sm">
            {{ targetSpecialist?.name }} has been notified. They will contact
            you shortly via the method you provided.
          </p>
          <button
            @click="closeModal"
            class="mt-8 px-6 py-2 bg-slate-200 text-slate-900 font-bold rounded-lg hover:bg-slate-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import gsap from "gsap";

// -- NAVIGATION LOGIC --
const isScrolled = ref(false);
const handleScroll = () => {
  if (typeof window !== "undefined") {
    isScrolled.value = window.scrollY > 20;
  }
};

const sideWidth = ref("0px");
function toggleNavbar() {
  if (sideWidth.value == "0px") {
    sideWidth.value = "250px";
  } else {
    sideWidth.value = "0px";
  }
}

// -- DATA --
const roles = [
  "Legal Aid",
  "Mental Health",
  "Financial Coach",
  "Translator",
  "Social Worker",
];
const selectedRole = ref("");

const specialists = ref([
  {
    id: 1,
    name: "Sarah Jenkins",
    initials: "SJ",
    role: "Legal Aid",
    bio: "Public defender with 10 years of experience in tenant rights and family law. I can help review eviction notices.",
    available: true,
    languages: ["English", "Spanish"],
    image: null,
  },
  {
    id: 2,
    name: "Dr. Aris Thorne",
    initials: "AT",
    role: "Mental Health",
    bio: "Licensed clinical psychologist specializing in anxiety and trauma. Offering free 30-min consultations.",
    available: false,
    languages: ["English"],
    image: null,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    initials: "ER",
    role: "Translator",
    bio: "Certified interpreter available to assist with filling out government forms and medical appointments.",
    available: true,
    languages: ["Spanish", "Portuguese", "English"],
    image: null,
  },
  {
    id: 4,
    name: "Mark Dube",
    initials: "MD",
    role: "Financial Coach",
    bio: "Retired accountant helping families manage debt, budget for groceries, and apply for assistance.",
    available: false,
    languages: ["English", "French"],
    image: null,
  },
  {
    id: 5,
    name: "Priya Patel",
    initials: "PP",
    role: "Social Worker",
    bio: "Case manager connecting youth to education programs and housing resources.",
    available: true,
    languages: ["English", "Hindi", "Gujarati"],
    image: null,
  },
  {
    id: 6,
    name: "James Wilson",
    initials: "JW",
    role: "Legal Aid",
    bio: "Pro-bono lawyer specializing in employment disputes and wage theft.",
    available: false,
    languages: ["English"],
    image: null,
  },
]);

const downloads = [
  {
    title: "Eviction Response Template",
    desc: "A standard legal letter to respond to landlord notices.",
  },
  {
    title: "Weekly Family Budget Sheet",
    desc: "Simple Excel/PDF sheet to track expenses.",
  },
  {
    title: "Medicaid Application Guide",
    desc: "Step-by-step instructions for 2026 enrollment.",
  },
  {
    title: "Anxiety Grounding Techniques",
    desc: "One-page mental health worksheet.",
  },
];

const filteredSpecialists = computed(() => {
  if (!selectedRole.value) return specialists.value;
  return specialists.value.filter((s) => s.role === selectedRole.value);
});

// -- MODAL LOGIC --
const showModal = ref(false);
const formSubmitted = ref(false);
const targetSpecialist = ref(null);

const openConnectModal = (person) => {
  targetSpecialist.value = person;
  formSubmitted.value = false;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const submitForm = () => {
  // Simulating API call
  setTimeout(() => {
    formSubmitted.value = true;
  }, 500);
};

// -- ANIMATION --
onMounted(() => {
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }

  gsap.to(".animate-elem", {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
  });
});

onUnmounted(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("scroll", handleScroll);
  }
});
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
