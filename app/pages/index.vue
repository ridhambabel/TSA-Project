<template>
  <!-- find good text color -->
  <div class="overflow-y-auto bg-amber-50">
    <div class="h-screen relative w-full">
      <img src="/assets/img/TopIMG.jpg" class="overflow-y-hidden h-[90vh]" />
      <div
        class="absolute top-3/8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-bold"
      >
        TEXT
      </div>
      <div class="flex justify-center">
        <!-- bg-teal-800 or transparent -->
        <div
          class="px-[2vw] font-bold absolute bottom-[15vh] w-[80vw] h-[12vh] shadow-2xl bg-transparent backdrop-blur-lg rounded-full flex justify-between items-center"
        >
          <div>Text</div>
          <div>Text</div>
          <div>Text</div>
          <div>Text</div>
          <div>Text</div>
          <div>Text</div>
        </div>
      </div>
    </div>
    <!-- search and things -->
    <div class="h-screen w-full">
      <div class="flex justify-center">
        <div
          class="flex items-center w-[50vw] border-2 shadow-lg rounded-full h-[10vh]"
        >
          <div class="pl-[7px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 20 20"
            >
              <path
                fill="#000000"
                d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33l-1.42 1.42l-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
              />
            </svg>
          </div>
          <!-- make text area, add js to just match cards to text inputted -->
          <div class="pl-[15px]">Search To Filter</div>
        </div>
      </div>
      <div
        class="flex flex-col items-center justify-center align-middle pt-[5vh]"
      >
        <!-- vary the size of the boxes and add all info -->
        <div class="flex items-center gap-x-[15px]">
          <div class="border w-[25vw] h-[40vh]"></div>
          <div class="border w-[30vw] h-[45vh]"></div>
        </div>
      </div>
    </div>
  </div>
</template>
