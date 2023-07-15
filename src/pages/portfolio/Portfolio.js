import React, { useEffect, useState } from "react";
// import projectData from "./projectsData.json";
import Project from "../../components/Project";
import PageHeader from "../../components/PageHeader";
// import { fetchDataFromApi } from "../../utils/api";
const Portfolio = (props) => {
  // Define three state variables
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Define an async function to fetch the portfolio data
  const fetchPortfolio = async () => {
    // Set the loading status to true
    setLoading(true);

    try {
      // Make the API request using fetch
      const response = await fetch("https://strapi.rajkawale.com/api/portpolios?populate=*");

      // Check if the response is successful
      if (response.ok) {
        // Parse the response data as JSON and destructure the data property
        const { data } = await response.json();

        // Create a new array of project images using map
        const images = data.map(project => project.attributes.project_image.data[0].attributes.url);

        // Update the portfolio state with the data and images
        setPortfolio({ data, images });

        // Clear any previous error message
        setError(null);
      } else {
        // Throw an error with the status text
        throw new Error(response.statusText);
      }
    } catch (error) {
      // Update the error state with the error message
      setError(error.message);
    } finally {
      // Set the loading status to false
      setLoading(false);
    }
  };

  // Use useEffect to call fetchPortfolio when the component mounts
  useEffect(() => {
    fetchPortfolio();
  }, []);

  // Define a function to render the project list as child components
  const ProjectList = () =>

    portfolio.data
    .sort((a, b) => {
      var x = a['attributes']['project_id']; var y = b['attributes']['project_id'];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    })
    .map((project1, i) => {
      let project = project1.attributes;
      let img = project.project_image.data[0].attributes.url;
      // console.log("sort", project.project_id);
      return (
        <Project
          key={i}
          id={project.project_id}
          title={project.project_title}
          technologies={project.project_technology}
          image={img} // Use the image from the images array
          color={project.project_background}
          // github={project.github}
          deployed={project.project_redirection}
          description={project.project_description
          }
        />);
    });

  return (
    <section className="portfolio">
      <PageHeader title="Portfolio" description="View my work" />
      <div className="row">
        {/* Display a loading indicator while fetching data */}
        {loading && <p>Loading...</p>}

        {/* Display an error message if there is an error */}
        {error && <p>Error: {error}</p>}

        {/* Display the project list if there is no error and data is available */}
        {/* Use a ternary operator to conditionally render the project list or a fallback message */}
        {portfolio ? <ProjectList /> : <p>No projects found</p>}
      </div>
    </section>
  );
};

export default Portfolio;