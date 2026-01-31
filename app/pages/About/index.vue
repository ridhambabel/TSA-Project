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
    <section
      id="about"
      class="scroll-section pt-32 py-16 px-6 md:px-10 lg:px-20 bg-amber-50 scroll-mt-20 overflow-hidden"
    >
      <div
        class="max-w-5xl mx-auto grid gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start"
      >
        <div class="animate-fade-up translate-y-8">
          <h1
            class="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight"
          >
            About This Hub
          </h1>
          <p class="mt-3 text-sm md:text-base text-slate-700">
            This Community Resource Hub was created by
            <span class="font-semibold">the Harborough community</span>. Our
            goal is to make it easier for residents to connect with local
            support, especially students and families who might not know where
            to start.
          </p>
          <p class="mt-3 text-sm md:text-base text-slate-700">
            We focus on resources that are low-cost or free, within or near our
            community, and open to the public. We verify each listing, but
            details such as hours and eligibility can change—always contact
            organizations directly before visiting.
          </p>

          <ul class="mt-4 grid gap-3 text-sm text-slate-700">
            <li
              class="flex gap-2 content-box hover:scale-102 duration-300 transition-all"
            >
              <span
                class="mt-1 h-2.5 min-w-2.5 w-2.5 rounded-full bg-amber-500"
              ></span>
              <span>
                <strong>Curated directory:</strong>
                resources are organized into clear categories with search and
                filters, so you can find what you need at a glance.
              </span>
            </li>
            <li
              class="flex gap-2 content-box hover:scale-102 duration-300 transition-all"
            >
              <span
                class="mt-1 h-2.5 min-w-2.5 w-2.5 rounded-full bg-amber-500"
              ></span>
              <span>
                <strong>City-built:</strong>
                designed, researched, and coded by specialists experienced in
                finding underappreciated resources and presenting them to the
                community.
              </span>
            </li>
            <li
              class="flex gap-2 content-box hover:scale-102 duration-300 transition-all"
            >
              <span
                class="mt-1 h-2.5 min-w-2.5 w-2.5 rounded-full bg-amber-500"
              ></span>
              <span>
                <strong>Community-driven:</strong>
                residents can suggest new resources and events anytime, keeping
                our Harborough community more connected and shining light on new
                events that add to our town's rich culture.
              </span>
            </li>
          </ul>
        </div>

        <aside
          class="animate-fade-up translate-x-12 rounded-2xl bg-white shadow-md border border-slate-200 p-5 space-y-4"
        >
          <h3 class="text-lg font-semibold text-slate-900">
            Emergency & crisis contacts
          </h3>
          <p class="text-sm text-slate-700">
            If you or someone you know is in immediate danger, call 911 or your
            local emergency number.
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
            These services are not run by this website, but we list them so help
            is always easy to find.
          </p>
        </aside>
      </div>
    </section>

    <!-- REFERENCE PAGE-->
    <section
      class="scroll-section py-16 px-6 md:px-10 lg:px-20 bg-amber-50 scroll-mt-20"
    >
      <h1
        class="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight tracking-tight"
      >
        Reference Page
      </h1>
      <div
        class="flex flex-col md:grid grid-cols-2 grid-rows-2 w-full gap-4 mb-4"
      >
        <div
          class="w-full max-w-3xl bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium order-1 transition-all duration-300 hover:scale-101"
        >
          <div class="flex flex-row content-center gap-2">
            <div>
              <font-awesome-icon
                icon="fa-solid fa-chart-simple"
                class="text-2xl text-green-500 z-5 mt-0.5"
              />
            </div>
            <h1
              class="text-xl md:text-2xl font-bold text-slate-900 mb-2 leading-tight tracking-tight"
            >
              Work Log:
            </h1>
          </div>
          <a
            href="https://drive.google.com/file/d/149se40zU8wrDUoaozg8lup8iqpfNVSAv/view?usp=share_link"
            class="text-md md:text-lg font-semibold mb-4 leading-tight tracking-tight underline text-[#4285F4] hover:text-[#0a4ab3]"
          >
            Click here to access our Work Log!
          </a>
        </div>
        <div
          class="w-full max-w-3xl bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium order-2 md:order-3 transition-all duration-300 hover:scale-101"
        >
          <div class="flex flex-row content-center gap-2">
            <div>
              <font-awesome-icon
                icon="fa-solid fa-table-list"
                class="text-2xl text-green-500 z-5 mt-0.5"
              />
            </div>
            <h1
              class="text-xl md:text-2xl font-bold text-slate-900 mb-2 leading-tight tracking-tight"
            >
              Student Copyright Checklist:
            </h1>
          </div>
          <a
            href="https://drive.google.com/file/d/1OQ_MyCd4v6B_jY2zHq62EJ2xuDJuzjMa/view?usp=share_link"
            class="text-md md:text-lg font-semibold mb-4 leading-tight tracking-tight underline text-[#4285F4] hover:text-[#0a4ab3]"
          >
            Click here to access our Copyright Checklist!
          </a>
        </div>
        <div
          class="row-span-2 w-full max-w-3xl bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium h-full min-h-40 order-3 md:order-2 transition-all duration-300 hover:scale-101"
        >
          <h1
            class="text-xl md:text-2xl font-bold text-slate-900 mb-2 leading-tight tracking-tight"
          >
            Other References:
            <div class="tooltip">
              <font-awesome-icon
                icon="fa-solid fa-circle-question"
                class="text-sm! text-amber-700 z-5"
              />
              <span class="text-xs! tooltiptext normal-case"
                >These are additional references to research, images, etc.</span
              >
            </div>
          </h1>
          <ul class="mt-4 grid gap-3 text-sm text-slate-700 pl-4">
            <li class="flex gap-2">
              <span
                class="mt-1 h-2.5 min-w-2.5 w-2.5 rounded-full bg-amber-500"
              ></span>
              <span>
                "Timelapse photo of people passing the street." *Unsplash*, 19
                Apr. 2016,
                https://unsplash.com/photos/timelapse-photo-of-people-passing-the-street-31-pOduwZGE.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- REVIEW/SUGGESTION SUBMISSION -->
    <section
      class="scroll-section py-16 px-6 md:px-10 lg:px-20 bg-amber-50 scroll-mt-20"
    >
      <h1
        class="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight tracking-tight"
      >
        Suggestions
      </h1>
      <div
        class="flex flex-col md:grid grid-cols-2 grid-rows-2 w-full gap-4 mb-4"
      >
        <textarea
          rows="6"
          class="resize-none row-span-2 col-span-1 w-full max-w-5xl bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all placeholder:text-slate-400"
          placeholder="Have any suggestions that could make your experience better, or any issues you'd like to report?"
        ></textarea>
        <div>
          <label class="block text-xs font-bold text-slate-500 uppercase mb-1"
            >Email Address
            <div class="tooltip">
              <font-awesome-icon
                icon="fa-solid fa-circle-question"
                class="text-md text-amber-700 z-5"
              />
              <span class="tooltiptext normal-case"
                >This is optional, but it allows us to reach out to you with any
                follow-up questions!</span
              >
            </div>
          </label>
          <input
            required
            type="email"
            class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
          />
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-500 uppercase mb-1"
            >Phone Number
            <div class="tooltip">
              <font-awesome-icon
                icon="fa-solid fa-circle-question"
                class="text-md text-amber-700 z-5"
              />
              <span class="tooltiptext normal-case"
                >This is optional, but it allows us to reach out to you with any
                follow-up questions!</span
              >
            </div>
          </label>
          <input
            required
            type="phone"
            class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
          />
        </div>
      </div>
      <button
        @click="openModal"
        class="w-[50%] max-w-50 py-3.5 rounded-xl bg-green-100 text-slate-900 font-bold hover:bg-green-300 transition-colors shadow-lg flex justify-center items-center mx-auto gap-2 mt-3"
      >
        Submit
        <font-awesome-icon
          icon="fa-solid fa-circle-arrow-right"
          class="text-lg z-5"
        />
      </button>
    </section>

    <!-- SUGGESTION POPUP MODAL -->
    <div
      v-if="showSuggestModal"
      class="fixed inset-0 z-100 flex items-center justify-center p-4"
    >
      <!-- Backdrop -->
      <div
        class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        @click="closeModal"
      ></div>

      <!-- Success Modal Content -->
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
          Suggestion Received!
        </h2>
        <p class="text-slate-600 mb-8 leading-relaxed">
          Your suggestion has been sent to our developer team, and we hope to
          get back to you (or resolve the issue) within 24 hours.
        </p>

        <button
          @click="closeModal"
          class="w-full py-3.5 rounded-xl bg-amber-400 text-slate-900 font-bold hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/20"
        >
          Got it!
        </button>
      </div>
    </div>

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
import { ref, onMounted, onUnmounted } from "vue";

// -- SCROLL LOGIC (Fixes the transparent navbar issue) --
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

// -- FORM LOGIC --
// unc
const showSuggestModal = ref(false);

function openModal() {
  showSuggestModal.value = true;
}

function closeModal() {
  showSuggestModal.value = false;
}

// -- LIFECYCLE HOOKS --
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<style scoped>
.animate-fade-up {
  animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
  transform: translateY(30px);
}
/* unc */
@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.content-box {
  margin-top: auto;
  background-color: rgba(248, 250, 252, 0.8);
  border-radius: 1rem;
  padding: 1.25rem;
  border: 1px solid #f1f5f9;
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
</style>
