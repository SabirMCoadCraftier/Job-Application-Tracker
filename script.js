// memory job data
const jobs = [
  { 
    id: 1, 
    status: "not_applied" 
  },
  { id: 2, 
    status: "not_applied" 
  },
  { 
    id: 3, 
    status: "not_applied" 
  },
  { 
    id: 4,
    status: "not_applied" 
  },
  { 
    id: 5, 
    status: "not_applied" 
  },
  { 
    id: 6, 
    status: "not_applied" 
  },
  { id: 7, 
    status: "not_applied" 
  },
  { id: 8, 
    status: "not_applied" 
  }
];

document.addEventListener("DOMContentLoaded", function () {
    // event state ( image + text)
  const emptyState = document.createElement("div");
  emptyState.className = "bg-white shadow rounded-xl w-full min-h-[350px] flex flex-col items-center justify-center text-center mt-8";

  const img = document.createElement("img");
  img.src = "images/jobs.png";
  img.className = "w-20 mb-6";

  const title = document.createElement("h3");
  title.innerText = "No jobs available";
  title.className = "text-xl font-semibold text-gray-700 mb-2";

  const subtitle = document.createElement("p");
  subtitle.innerText = "Check back soon for new job opportunities.";
  subtitle.className = "text-gray-500 text-sm";

  emptyState.append(img, title, subtitle);  

  const cardsSection = document.querySelector("section");
  
   function toggleEmptyState() {
    let visible = 0;
    jobCards.forEach(card => {
      if(card.style.display !== "none")
        visible++;
    });

    if(visible === 0) {
      if(!cardsSection.contains(emptyState)) {
        cardsSection.appendChild(emptyState);
      }   
    } else {
     emptyState.remove();
      }
  }