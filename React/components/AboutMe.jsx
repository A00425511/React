import '../src/as1.css'
import AG from "../src/assets/AG1.JPEG"

const AboutMe = () =>{
    return(
        <section>
            <h1>About Me!</h1>
            <img className='me' src={AG} alt="AG" />
             <h2>
                Hi, my name is Adrien Grant!
             </h2>
             <br />
             <p>
                I'm a Student at Saint Mary's University (Halifax, NS) taking my Master of Science in
                Computing and Data Analytics.
             </p>
             <p>
                I joined the MCDA program to broaden my capabilities as a developer and learn more about data analysis!
             </p>

        </section>
    );
}

export default AboutMe;