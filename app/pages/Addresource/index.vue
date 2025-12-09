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
    <main class="pt-32 pb-24 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-5 gap-12 items-start">
        <!-- Left Side: Context & Info -->
        <div class="lg:col-span-2 animate-fade-up">
          <span
            class="inline-block py-1.5 px-4 rounded-full bg-amber-100 border border-amber-200 text-amber-900 font-bold tracking-widest text-[10px] uppercase mb-6 shadow-sm"
          >
            Community Calendar
          </span>
          <h1
            class="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight"
          >
            Share an Event
          </h1>
          <p class="text-slate-600 text-lg leading-relaxed mb-8">
            Help us keep Harborough connected. If you are hosting a food drive,
            a job fair, or a free wellness workshop, let the community know.
          </p>

          <div
            class="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-sm"
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
                <span>Events must be free or low-cost to attend.</span>
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
          <div class="card-base animate-fade-up delay-100">
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
                        class="block text-xs font-bold text-slate-500 uppercase mb-1"
                        >Date</label
                      >
                      <input
                        required
                        type="date"
                        class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
                      />
                    </div>
                    <div>
                      <label
                        class="block text-xs font-bold text-slate-500 uppercase mb-1"
                        >Time</label
                      >
                      <input
                        required
                        type="time"
                        class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
                      />
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

                  <div>
                    <label
                      class="block text-xs font-bold text-slate-500 uppercase mb-1"
                      >Category</label
                    >
                    <select
                      class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all cursor-pointer"
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
          Thank you for contributing to the Harborough community. Your event has
          been sent to our team and will be processed within 24 hours.
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
import { ref } from "vue";

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
</style>
