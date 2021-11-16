import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";
import { Avatar } from "@material-ui/core";
const Testimonials = () => {
  return (
    <div
      className="testimonia p-12"
      style={{ display: "flex", justifyContent: "center", marginTop: 50, backgroundColor: '#f3f0bf', color: '#fa8ea3' }}
    >
      <div style={{ width: "50%", textAlign: "center" }}>
        <h1 style={{ marginBottom: 20 }}>Baby's Mom say's</h1>
        <Slider prevArrow={<button />} nextArrow={<button />}>
          <Card img="https://images.unsplash.com/photo-1560707857-b897819e06fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFieSUyMG1vdGhlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
          <Card img="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg" />
          <Card img="https://media.istockphoto.com/photos/portrait-of-smiling-mixed-race-woman-looking-at-camera-picture-id1319763830?b=1&k=20&m=1319763830&s=170667a&w=0&h=wE44n9yP1nrefeqv5DCl5mE3ouU01FNNHeZPR0yDCWA=" />
          <Card img="https://images.unsplash.com/photo-1581952975780-50b4dbbaf206?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fGJhYnklMjBtb3RoZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
          <Card img="https://images.unsplash.com/photo-1590467590164-c75b94a98575?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFieSUyMG1vdGhlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
          <Card img="https://images.unsplash.com/photo-1560707854-fb9a10eeaace?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFieSUyMG1vdGhlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "25px" } }}
        src={img}
        style={{
          width: 150,
          height: 150,
          marginBottom: 20,
        }}
      />
      <p style={{ color: '#fa8ea3' }}>
        I Like Their products. I will suggest them to the people who wants to buy. They are doing excellent. Goodluck for future.
      </p>
    </div>
  );
};

export default Testimonials;