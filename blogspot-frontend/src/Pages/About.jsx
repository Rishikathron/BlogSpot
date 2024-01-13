import './About.css'

const About = () => {
    return (
      <div className='container'>
        <h2>About Us</h2>
        <p>Welcome to our Blog Application! We're passionate about sharing stories, ideas, and experiences. Our mission is to create a platform where you can explore, learn, and connect with others.</p>
        <br /><br />
        <h3>Our Team</h3>
        <p>We have a dedicated team of writers and contributors who bring you diverse and engaging content. Meet the minds behind the blog:</p>
        <br />
        <ul>
          <li>Rishwanth - Creator & Editor-in-Chief</li>
          <li>Jane Smith - Senior Writer</li>
          <li>Chris Johnson - Tech Blogger</li>
          {/* Add more team members as needed */}
        </ul>
        <br /><br />
        <h3>Contact Us</h3>
        <p>Have questions or suggestions? Feel free to reach out to us:</p>
        <p>Email: info@example.com</p>
        <p>Phone: (123) 456-7890</p>
  
        <p>Thank you for being a part of our community! Happy reading!</p>
      </div>
    );
  };
  
  export default About;