<script>
  import "../app.css";
</script>

<div class="bg-white pb-6 sm:pb-8 lg:pb-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <header class="mb-4 flex items-center justify-between py-4 md:py-8">
      <a
        href="/"
        class="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
        aria-label="logo"
      >
        HackMe
      </a>

      <div>
        <a
          href="/login"
          class="rounded-lg bg-gray-200 px-4 py-2 text-center text-xs font-semibold text-gray-500 outline-none ring-tone transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 lg:px-8 lg:py-3 lg:text-sm lg:text-base"
          >Login</a
        >
        <a
          href="/signup"
          class="rounded-lg bg-primary px-4 py-2 text-center text-xs font-semibold text-gray-100 outline-none ring-tone transition duration-100 hover:bg-secondary focus-visible:ring active:text-gray-200 lg:px-8 lg:py-3 lg:text-sm lg:text-base"
          >Sign Up</a
        >
      </div>
    </header>

    <section
      class="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48"
    >
      <img
        src="https://plus.unsplash.com/premium_photo-1670884128248-858c56bdb838?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        loading="lazy"
        alt="girls"
        class="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div class="absolute inset-0 bg-secondary mix-blend-multiply" />

      <div class="relative flex flex-col items-center p-4 sm:max-w-xl">
        <h1
          class="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl"
        >
          Easy, simple like the good old days
        </h1>

        <div class="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          <a
            href="/signup"
            class="inline-block rounded-lg bg-primary px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-tone transition duration-100 hover:bg-secondary focus-visible:ring active:bg-secondary md:text-base"
            >Start now</a
          >
        </div>
      </div>
    </section>
  </div>
</div>

<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <h2
      class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12"
    >
      Blog Topics
    </h2>

    <div
      class="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8"
    >
      <div
        class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1675706185894-e48c37765c04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2160&q=80"
          loading="lazy"
          alt="Sports and Fitness"
          class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />

        <div
          class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"
        />

        <div class="relative mb-3 ml-4">
          <h3 class="text-sm text-white md:text-lg">Sports and Fitness</h3>
          <p class="text-xs text-white">
            Exploring the importance of physical fitness and sports activities
            in daily life.
          </p>
        </div>
      </div>

      <div
        class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
      >
        <img
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1640&q=80"
          loading="lazy"
          alt="Technology"
          class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />

        <div
          class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"
        />

        <div class="relative mb-3 ml-4">
          <h3 class="text-sm text-white md:text-lg">Technology</h3>
          <p class="text-xs text-white">
            An overview of how technology has changed our lives, for better or
            worse, and what to expect in the future.
          </p>
        </div>
      </div>

      <div
        class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
      >
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1642&q=80"
          loading="lazy"
          alt="Travel and Culture"
          class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />

        <div
          class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"
        />

        <div class="relative mb-3 ml-4">
          <h3 class="text-sm text-white md:text-lg">Travel and Culture</h3>
          <p class="text-xs text-white">
            Sharing insights into different cultures around the world, travel
            tips, and the benefits of exploring new places.
          </p>
        </div>
      </div>

      <div
        class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
      >
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1567&q=80"
          loading="lazy"
          alt="Wellness"
          class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />

        <div
          class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"
        />

        <div class="relative mb-3 ml-4">
          <h3 class="text-sm text-white md:text-lg">Wellness</h3>
          <p class="text-xs text-white">
            Discussing wellness routines, mental health, and how to find balance
            in the modern world.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-lg px-4 md:px-8">
    <div class="mb-8 md:mb-12">
      <h2
        class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl"
      >
        Our Team by the numbers
      </h2>

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
        This is a section of some simple filler text, also known as placeholder
        text. It shares some characteristics of a real written text but is
        random or otherwise generated.
      </p>
    </div>

    <div
      class="grid grid-cols-2 gap-6 rounded-lg bg-primary p-6 md:grid-cols-4 md:gap-8 md:p-8"
    >
      <div class="flex flex-col items-center">
        <div class="text-xl font-bold text-white sm:text-2xl md:text-3xl">
          200
        </div>
        <div class="text-sm text-tone sm:text-base">People</div>
      </div>

      <div class="flex flex-col items-center">
        <div class="text-xl font-bold text-white sm:text-2xl md:text-3xl">
          500+
        </div>
        <div class="text-sm text-tone sm:text-base">People</div>
      </div>

      <div class="flex flex-col items-center">
        <div class="text-xl font-bold text-white sm:text-2xl md:text-3xl">
          1000+
        </div>
        <div class="text-sm text-tone sm:text-base">Customers</div>
      </div>

      <div class="flex flex-col items-center">
        <div class="text-xl font-bold text-white sm:text-2xl md:text-3xl">
          A couple
        </div>
        <div class="text-sm text-tone sm:text-base">Coffee breaks</div>
      </div>
    </div>
  </div>
</div>

<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
    <div class="mb-10 md:mb-16">
      <h2
        class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl"
      >
        Meet our Team
      </h2>

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
        In the context of this groundbreaking project, we've assembled a team of
        both talented and passionate developers. These experts in various
        technologies are the driving force behind our success, contributing to
        the development of cutting-edge solutions.
      </p>
    </div>

    <div class="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-20">
      <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
        <div
          class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32"
        >
          <img
            src="/person/yassine.jpeg"
            alt="Yassine Bouknify"
            loading="lazy"
            class="h-full w-full object-cover object-center"
          />
        </div>

        <div>
          <div class="text-center font-bold text-primary md:text-lg">
            Yassine Bakrim
          </div>
          <p
            class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base"
          >
            DevSecOps
          </p>

          <div class="flex justify-center">
            <div class="flex gap-4">
              <a
                href="https://www.linkedin.com/in/yassinebakrim89/"
                target="_blank"
                class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  class="h-5 w-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
        <div
          class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32"
        >
          <img
            src="/person/guillaume.jpeg"
            alt="Guillaume Dorschner"
            loading="lazy"
            class="h-full w-full object-cover object-center"
          />
        </div>

        <div>
          <div class="text-center font-bold text-primary md:text-lg">
            Guillaume Dorschner
          </div>
          <p
            class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base"
          >
            Tech Lead
          </p>

          <div class="flex justify-center">
            <div class="flex gap-4">
              <a
                href="https://www.linkedin.com/in/guillaume-dorschner/"
                target="_blank"
                class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  class="h-5 w-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
        <div
          class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32"
        >
          <img
            src="/person/louis.jpeg"
            loading="lazy"
            alt="Louis Anne"
            class="h-full w-full object-cover object-center"
          />
        </div>

        <div>
          <div class="text-center font-bold text-primary md:text-lg">
            Louis Anne
          </div>
          <p
            class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base"
          >
            DevSecOps
          </p>

          <div class="flex justify-center">
            <div class="flex gap-4">
              <a
                href="https://www.linkedin.com/in/louis-anne-3a068a224/"
                target="_blank"
                class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  class="h-5 w-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
        <div
          class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32"
        >
          <img
            src="/person/fatima.jpeg"
            loading="lazy"
            alt="Fatima-Zahra Bekraoui"
            class="h-full w-full object-cover object-center"
          />
        </div>

        <div>
          <div class="text-center font-bold text-primary md:text-lg">
            Fatima-Zahra Bekraoui
          </div>
          <p
            class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base"
          >
            Rapporteur
          </p>

          <div class="flex justify-center">
            <div class="flex gap-4">
              <a
                href="https://www.linkedin.com/in/fatima-zahra-bekraoui-342505210/"
                target="_blank"
                class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  class="h-5 w-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
        <div
          class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32"
        >
          <img
            src="/person/shaina.jpeg"
            alt="Shaina Bakili"
            loading="lazy"
            class="h-full w-full object-cover object-center"
          />
        </div>

        <div>
          <div class="text-center font-bold text-primary md:text-lg">
            Shaina Bakili
          </div>
          <p
            class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base"
          >
            CEO
          </p>

          <div class="flex justify-center">
            <div class="flex gap-4">
              <a
                href="https://www.linkedin.com/in/sha%C3%AFna-bakili-2b3a5720b/"
                target="_blank"
                class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  class="h-5 w-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
        <div
          class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32"
        >
          <img
            src="/person/vivien.png"
            alt="Vivien Deblock"
            loading="lazy"
            class="h-full w-full object-cover object-center"
          />
        </div>

        <div>
          <div class="text-center font-bold text-primary md:text-lg">
            Vivien Deblock
          </div>
          <p
            class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base"
          >
            Communications Manager
          </p>

          <div class="flex justify-center">
            <div class="flex gap-4">
              <a
                href="https://www.linkedin.com/in/vivien-deblock-36162222b/"
                target="_blank"
                class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  class="h-5 w-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
        <div
          class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32"
        >
          <img
            src="/person/nour.jpeg"
            alt="Nour"
            loading="lazy"
            class="h-full w-full object-cover object-center"
          />
        </div>

        <div>
          <div class="text-center font-bold text-primary md:text-lg">
            Nour Gali
          </div>
          <p
            class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base"
          >
            Researcher & Designer
          </p>

          <div class="flex justify-center">
            <div class="flex gap-4">
              <a
                href="https://www.linkedin.com/in/nour-galai/"
                target="_blank"
                class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  class="h-5 w-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
        <div
          class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32"
        >
          <img
            src="/person/mathias.jpg"
            alt="Mathias Balian"
            loading="lazy"
            class="h-full w-full object-cover object-center"
          />
        </div>

        <div>
          <div class="text-center font-bold text-primary md:text-lg">
            Mathias Balian
          </div>
          <p
            class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base"
          >
            Communications Manager
          </p>

          <div class="flex justify-center">
            <div class="flex gap-4">
              <a
                href="https://www.linkedin.com/in/mathias-balian/"
                target="_blank"
                class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  class="h-5 w-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<footer class="bg-white">
  <div class="bg-primary py-6">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div
        class="flex flex-col items-center justify-between gap-2 md:flex-row"
      />
    </div>
  </div>

  <div class="pt-12 lg:pt-16">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div
        class="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6 lg:gap-8"
      >
        <div class="col-span-full lg:col-span-2">
          <div class="mb-4 lg:-mt-2">
            <a
              href="/"
              class="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl"
              aria-label="logo"
            >
              HackMe
            </a>
          </div>

          <div class="flex gap-4">
            <div
              class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
            >
              <svg
                class="h-5 w-5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </div>

            <div
              target="_blank"
              class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
            >
              <svg
                class="h-5 w-5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                />
              </svg>
            </div>

            <div
              class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
            >
              <svg
                class="h-5 w-5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                />
              </svg>
            </div>

            <div
              class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
            >
              <svg
                class="h-5 w-5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">
            Products
          </div>

          <nav class="flex flex-col gap-4">
            <div>
              <a
                href="/rien"
                class="text-gray-500 transition duration-100 hover:text-primary active:text-tone"
                >Overview</a
              >
            </div>

            <div>
              <a
                href="/rien"
                class="text-gray-500 transition duration-100 hover:text-primary active:text-tone"
                >Solutions</a
              >
            </div>

            <div>
              <a
                href="/rien"
                class="text-gray-500 transition duration-100 hover:text-primary active:text-tone"
                >Pricing</a
              >
            </div>

            <div>
              <a
                href="/rien"
                class="text-gray-500 transition duration-100 hover:text-primary active:text-tone"
                >Customers</a
              >
            </div>
          </nav>
        </div>

        <div>
          <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">
            Company
          </div>

          <nav class="flex flex-col gap-4">
            <div>
              <a
                href="/rien"
                class="text-gray-500 transition duration-100 hover:text-primary active:text-tone"
                >Investor Relations</a
              >
            </div>

            <div>
              <a
                href="/rien"
                class="text-gray-500 transition duration-100 hover:text-primary active:text-tone"
                >Jobs</a
              >
            </div>

            <div>
              <a
                href="/rien"
                class="text-gray-500 transition duration-100 hover:text-primary active:text-tone"
                >Press</a
              >
            </div>

            <div>
              <a
                href="/rien"
                class="text-gray-500 transition duration-100 hover:text-primary active:text-tone"
                >Blog</a
              >
            </div>
          </nav>
        </div>

        <div>
          <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">
            Support
          </div>

          <nav class="flex flex-col gap-4">
            <div>
              <a
                href="/rien"
                class="text-gray-500 transition duration-100 hover:text-primary active:text-tone"
                >Contact</a
              >
            </div>

            <div>
              <a
                href="/rien"
                class="text-gray-500 transition duration-100 hover:text-primary active:text-tone"
                >Documentation</a
              >
            </div>

            <div>
              <a
                href="/rien"
                class="text-gray-500 transition duration-100 hover:text-primary active:text-tone"
                >Chat</a
              >
            </div>

            <div>
              <a
                href="/rien"
                class="text-gray-500 transition duration-100 hover:text-primary active:text-tone"
                >FAQ</a
              >
            </div>
          </nav>
        </div>

        <div>
          <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">
            Legal
          </div>

          <nav class="flex flex-col gap-4">
            <div>
              <a
                href="/rien"
                class="text-gray-500 transition duration-100 hover:text-primary active:text-tone"
                >Terms of Service</a
              >
            </div>

            <div>
              <a
                href="/rien"
                class="text-gray-500 transition duration-100 hover:text-primary active:text-tone"
                >Privacy Policy</a
              >
            </div>

            <div>
              <a
                href="/rien"
                class="text-gray-500 transition duration-100 hover:text-primary active:text-tone"
                >Cookie settings</a
              >
            </div>
          </nav>
        </div>
      </div>

      <div class="border-t py-8 text-center text-sm text-gray-400">
        © 2023 - Present HackMe. All rights reserved.
      </div>
    </div>
  </div>
</footer>
