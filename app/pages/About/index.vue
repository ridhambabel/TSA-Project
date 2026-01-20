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
              We focus on resources that are low-cost or free, within or near
              our community, and open to the public. We verify each listing, but
              details such as hours and eligibility can change—always contact
              organizations directly before visiting.
            </p>

            <ul class="mt-4 grid gap-3 text-sm text-slate-700">
              <li class="flex gap-2 content-box">
                <span class="mt-1 h-2.5 min-w-2.5 w-2.5 rounded-full bg-amber-500"></span>
                <span>
                  <strong>Curated directory:</strong>
                  resources are organized into clear categories with search and
                  filters, so you can find what you need at a glance.
                </span>
              </li>
              <li class="flex gap-2 content-box">
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
              <li class="flex gap-2 content-box">
                <span class="mt-1 h-2.5 min-w-2.5 w-2.5 rounded-full bg-amber-500"></span>
                <span>
                  <strong>Community-driven:</strong>
                  residents can suggest new resources and events anytime, keeping our Harborough community
                  more connected and shining light on new events that add to our town's rich culture.
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
      </div>
</template>


<style scoped>
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

    .content-box {
        margin-top: auto;
        background-color: rgba(248, 250, 252, 0.8);
        border-radius: 1rem;
        padding: 1.25rem;
        border: 1px solid #f1f5f9;
    }
</style>