import Hero from "@/components/Hero";
import "./globals.css";
import AboutMe from "@/components/AboutMe";
import ContactUs from "@/components/ContactUs";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import GetOurUpdate from "@/components/GetOurUpdate";
export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Pricing />
      <Testimonials />
      <GetOurUpdate/>
      <ContactUs />
    </>
  );
}
/*
<div class="w-full h-full flex justify-center items-center">
    <h1 id="typewriter" class="text-4xl font-bold"></h1>
</div>

<script>
const words = ["Hello, World!", "Welcome to my website!", "This is a typewriter effect."];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  if (isDeleting) {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j-1);
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  } else {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j+1);
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, 100);
}

type();
</script>
*/