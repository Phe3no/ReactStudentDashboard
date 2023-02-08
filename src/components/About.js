import React from "react";

const About = () => {
  return (
    <article className="about-article">
      <h3>Home-page</h3>
      <ul>
        <li>
          When you click the Home button it will reset to the average data of
          all students.
        </li>
        <li>
          Unchecking a student in the homepage removes his/her data from the
          calculated averages.
        </li>
        <li>
          Unchecking a student in the homepage removes his/her data also from
          the datapage.
        </li>
        <li>
          When you click on a students name, you will be taken to a separated
          chart-page with just the data of that one student.
        </li>
        <li>
          When you click the green up or down arrows, the difficulty-level is
          sorted accordingly.
        </li>
        <li>
          When you click the red up or down arrows, the fun-level is sorted
          accordingly.
        </li>
        <li>
          When you click on the Bar-chart button, the default Bar-chart will be
          presented.
        </li>
        <li>
          When you click on the Line-chart button, the Line-chart will be
          presented.
        </li>
        <li>
          When you click on the green difficult button, or on the name, it will
          toggle it's representation in the charts.
        </li>
        <li>
          When you click on the red fun button, or on the name, it will toggle
          it's representation in the charts.
        </li>
      </ul>

      <h3>Students page</h3>
      <ul>
        <li>
          Clicking on the Students button, takes you to an overview of all
          students, nothing more nothing less.
        </li>
      </ul>
      <h3>Data page</h3>
      <ul>
        <li>Clicking the Data button, takes you to a table overview.</li>
        <li>
          All the data, of the in the homepage checked students, is represented
          here.
        </li>
        <li>And yes of course, there are a few sort buttons.</li>
      </ul>
      <h3>About page</h3>
      <ul>
        <li>
          This page, just in case you're curious about the functionality of the
          app.
        </li>
      </ul>
      <h2>
        What topics did I learn and use, while I was preparing and building this
        app.
      </h2>
      <ul>
        <li>
          This app is the result of my latest assignment from WINC-Academy
          Front-end Webdevelopment.
        </li>
        <li>
          I spent quite some time on the dentists exercise, to practice a lot
          with react and redux. The code you can find at the following link.
          <a href="git@github.com:Phe3no/DentistCcompanyBVT.git">
            git@github.com:Phe3no/DentistCcompanyBVT.git
          </a>
        </li>
        <li>
          If you take a look at the dentist app, make sure that before: "npm run
          start" you run: npx json-server -p 5000 -w src/app/data.json
        </li>
        <li>
          I made use of " json-server " to retrieve data from a JSON-file as if
          it came from an API.
        </li>
        <li>
          Axios is used as a dependency to do CRUD operations. In the dentist
          exercise i used Create, Read, Update and Delete. In this app only
          Read, but the rest of the operations can be added relatively easily.
        </li>
        <li>
          I'm getting more, and more comfortable with react and
          @reduxjs/toolkit.
        </li>
        <li>
          Also with objects, arrays, arrays of objects and there higher-order
          functions.
        </li>
      </ul>
    </article>
  );
};

export default About;
