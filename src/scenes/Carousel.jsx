import Card from "./Card";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function Carousel() {

const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
}
const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
}


  return (
    <div className="relative">
      <div className="text-center py-4  text-xl font-bold">Contests & Events</div>
     
      <div id="content" className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide">
        <div>
          <Card contest="Leetcode 356" desc="Helps you to imporve your code Quality."
          img="https://1.bp.blogspot.com/-fdSfnJcRTEk/YP1NuSFoJnI/AAAAAAAAG-4/byASpluQisA40Rt-B7W-lE44c4A-VekcgCLcBGAsYHQ/s400/codechamps.png" />
        </div>
        <div>
          <Card contest="Codechef 96" desc="Gives you better Clarity about Competetive Coding."
           img="https://cdn.codechef.com/download/small-banner/CEFT2020/1598616613.jpg"/>
        </div>
        <div>
          <Card  contest="Codeforces 322" desc="A competetive place where you can see your rankings."
          img="https://newhorizoncollegeofengineering.in/wp-content/uploads/2022/04/Coding-contest-poster-27-04-22.jpeg"/>
        </div>
        <div>
          <Card  contest="Leetcode 356" desc="Helps you to imporve your code Quality."
          img="https://1.bp.blogspot.com/-fdSfnJcRTEk/YP1NuSFoJnI/AAAAAAAAG-4/byASpluQisA40Rt-B7W-lE44c4A-VekcgCLcBGAsYHQ/s400/codechamps.png"/>
        </div>
        <div>
          <Card contest="Codechef 98" desc="Gives you better Clarity about Competetive Coding." img="https://1.bp.blogspot.com/-fdSfnJcRTEk/YP1NuSFoJnI/AAAAAAAAG-4/byASpluQisA40Rt-B7W-lE44c4A-VekcgCLcBGAsYHQ/s400/codechamps.png"/>
        </div>
        <div>
          <Card contest="Leetcode 56" desc="Must to imporve your Data Structure Knowledge." 
          img="https://1.bp.blogspot.com/-fdSfnJcRTEk/YP1NuSFoJnI/AAAAAAAAG-4/byASpluQisA40Rt-B7W-lE44c4A-VekcgCLcBGAsYHQ/s400/codechamps.png"/>
        </div>
       
      </div>

      <div className="absolute right-1/2">
        <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
          <FiChevronLeft />
        </button>
        <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
          <FiChevronRight />
        </button>
      </div>

    </div>
  );
}

export default Carousel;