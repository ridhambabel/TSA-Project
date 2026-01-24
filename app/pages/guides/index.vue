<template>
  <div
    class="min-h-screen bg-amber-50/50 text-slate-900 font-sans selection:bg-amber-200 selection:text-amber-900"
  >
    <div
      class="absolute inset-0 bg-linear-to-b from-slate-900/90 via-slate-900/40 to-amber-50/50 h-[200px]"
    ></div>
    <!-- NAVBAR -->
    <nav
      class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 transition-all duration-300"
      :class="[
        isScrolled
          ? 'py-3 bg-slate-950/90 backdrop-blur-md shadow-lg border-b border-white/5'
          : 'py-6 bg-transparent',
      ]"
    >
      <!-- LOGO (Links to Home) -->
      <NuxtLink to="/" class="flex items-center gap-3 cursor-pointer group">
        <div
          class="h-9 w-9 rounded-full bg-amber-400/90 grid place-items-center text-slate-900 font-black text-lg shadow-md group-hover:bg-amber-300 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
            />
            <path
              d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
            />
          </svg>
        </div>
        <div class="leading-tight text-amber-50">
          <p class="text-xs uppercase tracking-[0.25em] text-amber-200">
            Harborough
          </p>
          <p
            class="text-sm font-semibold"
            :class="{ 'drop-shadow-md': !isScrolled }"
          >
            Resource Hub
          </p>
        </div>
      </NuxtLink>

      <!-- CENTER NAVIGATION LINKS -->
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
        <NuxtLink
          to="/About"
          class="nav-link hover:text-amber-300 transition-colors"
          :class="{ 'drop-shadow-sm': !isScrolled }"
        >
          About
        </NuxtLink>
      </div>

      <!-- RIGHT SIDE ACTIONS -->
      <div class="flex items-center gap-3">
        <!-- BACKPACK TRIGGER -->
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

    <!-- MAIN CONTENT -->
    <main class="pt-32 pb-24 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <!-- Page Header -->
      <div class="mb-16 text-center animate-fade-up">
        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight"
        >
          Navigating the System
        </h1>
        <p class="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Applying for assistance can be confusing. We've created step-by-step
          guides to help you prepare the right documents and know exactly what
          to expect in Harborough.
        </p>
      </div>

      <!-- Guides Grid -->
      <div class="grid gap-6 lg:gap-8 md:grid-cols-2">
        <!-- Guide 1: SNAP/Food Benefits -->
        <div class="card-base group delay-0">
          <div class="flex items-start justify-between mb-6">
            <div
              class="icon-box bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-7 h-7"
              >
                <path
                  d="M20.205 4.791a9.938 9.938 0 0 0-6.866-3.218 6.101 6.101 0 0 0-3.78 1.435 6.273 6.273 0 0 0-1.99 1.644c-1.196 1.666-1.543 3.633-1.028 5.49a1.003 1.003 0 0 1-.527 1.157 5.918 5.918 0 0 0-3.568 2.593 5.86 5.86 0 0 0 .559 6.843l1.862-5.96a2.21 2.21 0 0 1 2.112-1.55h.005a2.186 2.186 0 0 1 2.138 1.661l1.791 6.94a5.91 5.91 0 0 0 6.66-2.073 5.942 5.942 0 0 0 .64-7.462 1.004 1.004 0 0 1 .475-1.4 7.63 7.63 0 0 0 1.517-6.106ZM9.034 16.518a3.67 3.67 0 0 0-1.077-.184l-.841 2.695a4.375 4.375 0 0 1-.397-4.624 4.417 4.417 0 0 1 2.315-1.92V16.518Z"
                />
              </svg>
            </div>
            <span class="badge">Government Aid</span>
          </div>
          <h3 class="text-2xl font-bold mb-3 text-slate-900 tracking-tight">
            Applying for SNAP
          </h3>
          <p class="text-slate-600 mb-8 leading-relaxed text-sm">
            Understand the eligibility requirements and document checklist for
            Harborough food benefits before you apply.
          </p>

          <div class="content-box">
            <h4 class="content-header">
              <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
              Documents to Bring
            </h4>
            <ul class="space-y-3">
              <li class="list-item">
                <svg
                  class="w-5 h-5 shrink-0 text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Driver's License or State ID</span>
              </li>
              <li class="list-item">
                <svg
                  class="w-5 h-5 shrink-0 text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Proof of income (Last 2 pay stubs)</span>
              </li>
              <li class="list-item">
                <svg
                  class="w-5 h-5 shrink-0 text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Residency (Utility bill or lease)</span>
              </li>
            </ul>
            <div
              class="mt-5 p-3 bg-white rounded-lg border border-amber-100 shadow-sm flex gap-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5 text-amber-400 shrink-0"
              >
                <path
                  d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
                />
              </svg>
              <p class="text-xs text-slate-600 font-medium leading-relaxed">
                <strong class="block text-slate-800">Pro Tip:</strong> Apply at
                Harborough.gov/benefits to save time before visiting.
              </p>
            </div>
          </div>
        </div>

        <!-- Guide 2: Food Pantry Visit -->
        <div class="card-base group delay-100">
          <div class="flex items-start justify-between mb-6">
            <div
              class="icon-box bg-orange-50 text-orange-600 group-hover:bg-orange-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-7 h-7"
              >
                <path
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                />
              </svg>
            </div>
            <span class="badge">Local Support</span>
          </div>
          <h3 class="text-2xl font-bold mb-3 text-slate-900 tracking-tight">
            Visiting a Food Pantry
          </h3>
          <p class="text-slate-600 mb-8 leading-relaxed text-sm">
            First time? Here is exactly what to expect when you visit local
            pantries like Harborough Food Bank or The Hub.
          </p>

          <div class="content-box">
            <h4 class="content-header">
              <span class="h-2 w-2 rounded-full bg-orange-500"></span>
              The Process
            </h4>
            <div class="space-y-4">
              <div class="flex gap-4">
                <div class="flex flex-col items-center">
                  <div class="step-circle">1</div>
                  <div
                    class="h-full w-0.5 bg-slate-200 mt-1 rounded-full"
                  ></div>
                </div>
                <div>
                  <h5 class="font-bold text-sm text-slate-900">Arrival</h5>
                  <p class="text-xs text-slate-500 mt-0.5">
                    Arrive 15 mins early. You may need to wait in your car.
                  </p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="flex flex-col items-center">
                  <div class="step-circle">2</div>
                  <div
                    class="h-full w-0.5 bg-slate-200 mt-1 rounded-full"
                  ></div>
                </div>
                <div>
                  <h5 class="font-bold text-sm text-slate-900">Intake</h5>
                  <p class="text-xs text-slate-500 mt-0.5">
                    Simple form about family size to determine portion size.
                  </p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="flex flex-col items-center">
                  <div class="step-circle">3</div>
                </div>
                <div>
                  <h5 class="font-bold text-sm text-slate-900">Pickup</h5>
                  <p class="text-xs text-slate-500 mt-0.5">
                    Receive pre-packed boxes or "client choice" shopping.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Guide 3: Rental Assistance -->
        <div class="card-base group delay-200">
          <div class="flex items-start justify-between mb-6">
            <div
              class="icon-box bg-blue-50 text-blue-600 group-hover:bg-blue-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-7 h-7"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.47 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06zm-6.53 4.5a.75.75 0 011.06 0l8.5 8.5a.75.75 0 01-1.06 1.06l-8.5-8.5a.75.75 0 010-1.06z"
                  clip-rule="evenodd"
                />
                <path
                  d="M5.03 9.47a.75.75 0 010 1.06l6.22 6.22a.75.75 0 001.06 0l6.22-6.22a.75.75 0 111.06 1.06l-6.22 6.22a2.25 2.25 0 01-3.18 0l-6.22-6.22a.75.75 0 010-1.06z"
                />
              </svg>
            </div>
            <span class="badge">Housing</span>
          </div>
          <h3 class="text-2xl font-bold mb-3 text-slate-900 tracking-tight">
            Facing Eviction?
          </h3>
          <p class="text-slate-600 mb-8 leading-relaxed text-sm">
            Steps to take immediately if you receive a Notice to Vacate. Time is
            critical.
          </p>

          <div class="content-box">
            <div
              class="mb-4 p-3 bg-rose-50 border border-rose-100 rounded-lg flex gap-3 items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5 text-rose-500 shrink-0"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clip-rule="evenodd"
                />
              </svg>
              <p class="text-xs font-bold text-rose-800">
                Do not ignore the notice.
              </p>
            </div>

            <h4 class="content-header">
              <span class="h-2 w-2 rounded-full bg-blue-500"></span>
              Action Plan
            </h4>
            <ol class="space-y-3 text-sm text-slate-700">
              <li class="flex gap-3">
                <span class="font-bold text-slate-400 font-mono">01.</span>
                <span>Contact landlord immediately in writing/email.</span>
              </li>
              <li class="flex gap-3">
                <span class="font-bold text-slate-400 font-mono">02.</span>
                <span>Call Harborough Tenant's Union or Legal Aid.</span>
              </li>
              <li class="flex gap-3">
                <span class="font-bold text-slate-400 font-mono">03.</span>
                <span>Gather proof of financial hardship (job loss).</span>
              </li>
            </ol>
          </div>
        </div>

        <!-- Guide 4: Job Interview Prep -->
        <div class="card-base group delay-300">
          <div class="flex items-start justify-between mb-6">
            <div
              class="icon-box bg-purple-50 text-purple-600 group-hover:bg-purple-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-7 h-7"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <span class="badge">Employment</span>
          </div>
          <h3 class="text-2xl font-bold mb-3 text-slate-900 tracking-tight">
            Interview Ready
          </h3>
          <p class="text-slate-600 mb-8 leading-relaxed text-sm">
            How to prepare for a job interview on a budget, from clothing to
            transportation.
          </p>

          <div class="content-box">
            <h4 class="content-header">
              <span class="h-2 w-2 rounded-full bg-purple-500"></span>
              Free Resources
            </h4>
            <ul class="space-y-4 text-sm text-slate-700">
              <li class="flex gap-3 items-start">
                <div class="p-1.5 bg-white rounded shadow-sm shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-4 h-4 text-purple-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.25 6.75a3.75 3.75 0 117.5 0 .75.75 0 01.75.75v11.25a.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V7.5a.75.75 0 01.75-.75z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <span class="font-bold block text-slate-900">Clothing</span>
                  <span class="text-xs text-slate-600"
                    >Check "Dress for Success" or local church closets listed in
                    our Directory.</span
                  >
                </div>
              </li>
              <li class="flex gap-3 items-start">
                <div class="p-1.5 bg-white rounded shadow-sm shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-4 h-4 text-purple-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <span class="font-bold block text-slate-900"
                    >Resume Help</span
                  >
                  <span class="text-xs text-slate-600"
                    >The Harborough Public Library offers free printing and
                    resume review.</span
                  >
                </div>
              </li>
              <li class="flex gap-3 items-start">
                <div class="p-1.5 bg-white rounded shadow-sm shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-4 h-4 text-purple-600"
                  >
                    <path
                      d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5zm15 0a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <span class="font-bold block text-slate-900">Transport</span>
                  <span class="text-xs text-slate-600"
                    >Check for discounted bus passes at local aid centers.</span
                  >
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <!-- <div
        class="mt-24 relative overflow-hidden bg-slate-900 rounded-3xl p-10 md:p-14 text-center text-amber-50 animate-fade-up shadow-2xl shadow-slate-900/40"
      >
        <div class="absolute inset-0 opacity-10">
          <svg
            class="h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
          </svg>
        </div>

        <div class="relative z-10">
          <h3 class="text-2xl md:text-3xl font-black tracking-tight">
            Have a question not listed here?
          </h3>
          <p class="mt-4 text-slate-400 text-lg max-w-xl mx-auto">
            Our community partners are happy to explain the process over the
            phone. Don't hesitate to reach out.
          </p>
          <div
            class="mt-10 flex flex-col md:flex-row justify-center items-center gap-4"
          >
            <button
              class="w-full md:w-auto rounded-full bg-amber-400 px-8 py-3.5 text-sm font-bold text-slate-900 hover:bg-amber-300 hover:scale-105 transition-all shadow-lg shadow-amber-900/20"
            >
              Browse Directory
            </button>
            <button
              class="w-full md:w-auto rounded-full bg-white/10 border border-white/20 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/20 hover:border-white/40 transition-all backdrop-blur-sm"
            >
              Contact Support
            </button>
          </div>
        </div> 
      </div> -->
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const isBackpackOpen = ref(false);
const savedResources = ref([]);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  if (typeof window !== "undefined") {
    const saves = localStorage.getItem("community-hub-saves");
    if (saves) savedResources.value = JSON.parse(saves);
  }

  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
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

/* Staggered Delays */
.delay-0 {
  animation-delay: 0.1s;
}
.delay-100 {
  animation-delay: 0.2s;
}
.delay-200 {
  animation-delay: 0.3s;
}
.delay-300 {
  animation-delay: 0.4s;
}

/* 
  Custom Component Classes
  Standard CSS used here instead of @apply
*/

.card-base {
  background-color: #ffffff;
  border-radius: 1.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.07);
  border: 1px solid rgba(226, 232, 240, 0.6);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  opacity: 0;
  animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.card-base:hover {
  box-shadow: 0 20px 25px -5px rgba(226, 232, 240, 0.5);
  border-color: #fde68a; /* amber-200 */
}

.icon-box {
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 1rem;
  display: grid;
  place-items: center;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s;
}

.badge {
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background-color: #f1f5f9;
  color: #64748b;
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  border: 1px solid #e2e8f0;
}

.content-box {
  margin-top: auto;
  background-color: rgba(248, 250, 252, 0.8);
  border-radius: 1rem;
  padding: 1.25rem;
  border: 1px solid #f1f5f9;
}

.content-header {
  font-weight: 700;
  font-size: 0.75rem;
  color: #0f172a;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.list-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: #334155;
  font-weight: 500;
}

.step-circle {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 9999px;
  background-color: #e2e8f0;
  color: #475569;
  font-size: 0.75rem;
  font-weight: 700;
  display: grid;
  place-items: center;
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
}
</style>
