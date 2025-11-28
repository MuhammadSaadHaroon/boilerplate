import React from "react";
import { Container, Typography } from "@mui/material";
import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <Container>
        <Typography style={{color:"#1976D2"}} variant="h3" mt={5}>About Us</Typography>
        <Typography mt={2}><b>This is a demo About page for the boilerplate project.</b>
        <br></br><br></br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias obcaecati, fugit et nemo maxime officiis labore nulla sapiente sint quam accusamus quae nesciunt earum dolore rerum sit eligendi corporis omnis.
        <br></br><br></br>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo aperiam tenetur maxime atque animi hic consequatur? Quia corporis at reiciendis doloribus quidem tempore. Quisquam, quidem a. Tempora, dolorem expedita?
        <br></br><br></br>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, perferendis reiciendis aperiam nihil dolores, nam maiores impedit excepturi similique natus porro officia animi error doloribus necessitatibus consectetur, tenetur adipisci. Rem.
        <br></br><br></br>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo odio, dignissimos laboriosam ipsam sint saepe dolorem, expedita quaerat possimus ea harum eos optio a, consequatur aliquam voluptatum repudiandae unde molestiae!
        <br></br><br></br>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio magnam non consequuntur cum excepturi blanditiis? A quibusdam repudiandae sunt eligendi incidunt, ipsa ipsam esse nostrum molestiae maxime eius, laboriosam minus.
        </Typography>
      </Container>
    </>
  );
}

export default About;
