import React from 'react';
import { darkModeColor, lightModeColor } from '../constants/colors.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';
import ProjectCard from './ProjectCard.tsx';

const Projects: React.FC = () => {
  const { isDarkMode } = useTheme();

  const projects = [
    {
      description:
        'Imagery is a image management service that allows you to upload, store, and manage your images. You can transform, crop, and resize your images. ',
      githubLink: 'https://github.com/rishmi5h/image-processing-service',
      imageUrl:
        'https://rishmi5h.s3.ap-south-1.amazonaws.com/portfolio/sigma-ui.webp?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCmFwLXNvdXRoLTEiRjBEAiBZUKfKsHq0ZWDq6A6B8d6FY8xn%2FIsSaP%2B1tg%2BmFn293wIgXqGdiImBQAqNtDZp60L7si%2B0%2FrThj8P46UFDNfYNmKEq5AIITxAAGgwyNDE1MzMxMTQ1MDYiDJLrWH%2BH3%2FZzE8%2FiMirBAhbvuN5i3QdH6Zgs3FFpUNAG%2BjvplVB7MK5zyBqxi%2Bu0wO2eJBI0yLiDZaDpDyOsTfmeP1mi797G%2Bycx1TvXkD%2BIzq%2FgZtWy45oqPt1QzTD%2FRoN4eWZzhvIgNKqsU22XXxwLNIW0g%2F21iFHvNxjK9HqFhW8y55xCVRs3pmI8m57u6rfowQjRlF3fsW7GhBmabNYlisxU1GiC5hsosM%2FlOtkg0j7qu%2BUEB%2B5KdXQw4p56z0unKocYXMyzpqKIohkEIWkwFUYCoGWjbkW8xImYArl%2FEBnVkV%2Fd0LzAFwEuuCGdnFmKzLH%2FJOpkoQTdg%2BNWwUgASVR7a35GPeL%2FHAxIuW42yQIIkw290lKkyB0ciNgvgQmfZVDbmJJw8nALnFWUOIx8S7vfDT5Sk7oD1p27AqpYrSYyJ1J7RPaU9DV60tngITD10sO2Bjq0AhBE3PJnXAlmVehblkCxLdERGvG%2BxR1SJQFGnC%2FgsdMYvRfGHqOF48EbReQkQCtSrAsJU%2B2t%2F6LTWZ6OqpUbCpoqflTDIRJR11eHqiDGMkiNo2zdw4ob23%2B0xBVPOcTu4JfMz9lCjsBdrHcvajIJYOh%2Br6JucE4%2FZCHr%2BVMbiRob8utj7yzFfyZTCbGiR6jA6WSeKIAyMGcAS4zRrrQYB1uw0ePgm%2BQeuQ5jwmTnNd8y4HRh3gesNBwVZ1zHXyQpPjfHZEhY7LmaKOF%2BFvEe0ItoxClfPnm%2FNFKqILlZZ8PG3lqriTN4G7XYwm5qYtlBGdjtP%2Bo13IbwceA3U38sc7ve7hYYVDVO4BDbEWwzvEiGoq0mKNbS%2FokkYz%2FWYbFsw88OqnDOWtiVrRLMuiWVBqyZHqx0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240829T215553Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIATQPD63CFES4NSMFY%2F20240829%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=15cba3718ee47bb13d93174f516fbcd8601030739d19e727c5ba6b640f48c680',
      name: 'Imagery - Image management',
      projectLink: 'https://imagery.rishmi5h.com/',
      techStack: ['Spring Boot', 'React', 'Tailwind CSS', 'MySQL', 'AWS S3'],
    },
    {
      description:
        'ΣUI is a Component Library that helps in building UI faster and easier. ',
      githubLink: 'https://github.com/rishmi5h/Sigma-UI',
      imageUrl:
        'https://rishmi5h.s3.ap-south-1.amazonaws.com/portfolio/sigma-ui.webp?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCmFwLXNvdXRoLTEiRjBEAiBZUKfKsHq0ZWDq6A6B8d6FY8xn%2FIsSaP%2B1tg%2BmFn293wIgXqGdiImBQAqNtDZp60L7si%2B0%2FrThj8P46UFDNfYNmKEq5AIITxAAGgwyNDE1MzMxMTQ1MDYiDJLrWH%2BH3%2FZzE8%2FiMirBAhbvuN5i3QdH6Zgs3FFpUNAG%2BjvplVB7MK5zyBqxi%2Bu0wO2eJBI0yLiDZaDpDyOsTfmeP1mi797G%2Bycx1TvXkD%2BIzq%2FgZtWy45oqPt1QzTD%2FRoN4eWZzhvIgNKqsU22XXxwLNIW0g%2F21iFHvNxjK9HqFhW8y55xCVRs3pmI8m57u6rfowQjRlF3fsW7GhBmabNYlisxU1GiC5hsosM%2FlOtkg0j7qu%2BUEB%2B5KdXQw4p56z0unKocYXMyzpqKIohkEIWkwFUYCoGWjbkW8xImYArl%2FEBnVkV%2Fd0LzAFwEuuCGdnFmKzLH%2FJOpkoQTdg%2BNWwUgASVR7a35GPeL%2FHAxIuW42yQIIkw290lKkyB0ciNgvgQmfZVDbmJJw8nALnFWUOIx8S7vfDT5Sk7oD1p27AqpYrSYyJ1J7RPaU9DV60tngITD10sO2Bjq0AhBE3PJnXAlmVehblkCxLdERGvG%2BxR1SJQFGnC%2FgsdMYvRfGHqOF48EbReQkQCtSrAsJU%2B2t%2F6LTWZ6OqpUbCpoqflTDIRJR11eHqiDGMkiNo2zdw4ob23%2B0xBVPOcTu4JfMz9lCjsBdrHcvajIJYOh%2Br6JucE4%2FZCHr%2BVMbiRob8utj7yzFfyZTCbGiR6jA6WSeKIAyMGcAS4zRrrQYB1uw0ePgm%2BQeuQ5jwmTnNd8y4HRh3gesNBwVZ1zHXyQpPjfHZEhY7LmaKOF%2BFvEe0ItoxClfPnm%2FNFKqILlZZ8PG3lqriTN4G7XYwm5qYtlBGdjtP%2Bo13IbwceA3U38sc7ve7hYYVDVO4BDbEWwzvEiGoq0mKNbS%2FokkYz%2FWYbFsw88OqnDOWtiVrRLMuiWVBqyZHqx0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240829T215553Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIATQPD63CFES4NSMFY%2F20240829%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=15cba3718ee47bb13d93174f516fbcd8601030739d19e727c5ba6b640f48c680',
      name: 'Sigma UI - Component Library',
      projectLink: 'https://sigma-ui.rishmi5h.com/',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    },
    {
      description: 'A fun website to ask your crush out on a date. ',
      githubLink: 'https://github.com/rishmi5h/doyouwannagooutwithme',
      imageUrl:
        'https://rishmi5h.s3.ap-south-1.amazonaws.com/portfolio/do-you-wanna-go-out.webp?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCmFwLXNvdXRoLTEiRjBEAiBZUKfKsHq0ZWDq6A6B8d6FY8xn%2FIsSaP%2B1tg%2BmFn293wIgXqGdiImBQAqNtDZp60L7si%2B0%2FrThj8P46UFDNfYNmKEq5AIITxAAGgwyNDE1MzMxMTQ1MDYiDJLrWH%2BH3%2FZzE8%2FiMirBAhbvuN5i3QdH6Zgs3FFpUNAG%2BjvplVB7MK5zyBqxi%2Bu0wO2eJBI0yLiDZaDpDyOsTfmeP1mi797G%2Bycx1TvXkD%2BIzq%2FgZtWy45oqPt1QzTD%2FRoN4eWZzhvIgNKqsU22XXxwLNIW0g%2F21iFHvNxjK9HqFhW8y55xCVRs3pmI8m57u6rfowQjRlF3fsW7GhBmabNYlisxU1GiC5hsosM%2FlOtkg0j7qu%2BUEB%2B5KdXQw4p56z0unKocYXMyzpqKIohkEIWkwFUYCoGWjbkW8xImYArl%2FEBnVkV%2Fd0LzAFwEuuCGdnFmKzLH%2FJOpkoQTdg%2BNWwUgASVR7a35GPeL%2FHAxIuW42yQIIkw290lKkyB0ciNgvgQmfZVDbmJJw8nALnFWUOIx8S7vfDT5Sk7oD1p27AqpYrSYyJ1J7RPaU9DV60tngITD10sO2Bjq0AhBE3PJnXAlmVehblkCxLdERGvG%2BxR1SJQFGnC%2FgsdMYvRfGHqOF48EbReQkQCtSrAsJU%2B2t%2F6LTWZ6OqpUbCpoqflTDIRJR11eHqiDGMkiNo2zdw4ob23%2B0xBVPOcTu4JfMz9lCjsBdrHcvajIJYOh%2Br6JucE4%2FZCHr%2BVMbiRob8utj7yzFfyZTCbGiR6jA6WSeKIAyMGcAS4zRrrQYB1uw0ePgm%2BQeuQ5jwmTnNd8y4HRh3gesNBwVZ1zHXyQpPjfHZEhY7LmaKOF%2BFvEe0ItoxClfPnm%2FNFKqILlZZ8PG3lqriTN4G7XYwm5qYtlBGdjtP%2Bo13IbwceA3U38sc7ve7hYYVDVO4BDbEWwzvEiGoq0mKNbS%2FokkYz%2FWYbFsw88OqnDOWtiVrRLMuiWVBqyZHqx0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240829T221118Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIATQPD63CFES4NSMFY%2F20240829%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=56656b745f2a6ca4239e43e99cf1882c764fba309b54750dfbb635c8693c2fd3',
      name: 'Do you wanna go out with me?',
      projectLink: 'https://doyouwannagooutwith.rishmi5h.com/',
      techStack: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      description: 'Created 30 projects in 30 days using vanilla JavaScript. ',
      githubLink: 'https://github.com/rishmi5h/30days-vanilla-js-challenge',
      imageUrl:
        'https://rishmi5h.s3.ap-south-1.amazonaws.com/portfolio/30-days-vanilla-js.webp?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCmFwLXNvdXRoLTEiRjBEAiBZUKfKsHq0ZWDq6A6B8d6FY8xn%2FIsSaP%2B1tg%2BmFn293wIgXqGdiImBQAqNtDZp60L7si%2B0%2FrThj8P46UFDNfYNmKEq5AIITxAAGgwyNDE1MzMxMTQ1MDYiDJLrWH%2BH3%2FZzE8%2FiMirBAhbvuN5i3QdH6Zgs3FFpUNAG%2BjvplVB7MK5zyBqxi%2Bu0wO2eJBI0yLiDZaDpDyOsTfmeP1mi797G%2Bycx1TvXkD%2BIzq%2FgZtWy45oqPt1QzTD%2FRoN4eWZzhvIgNKqsU22XXxwLNIW0g%2F21iFHvNxjK9HqFhW8y55xCVRs3pmI8m57u6rfowQjRlF3fsW7GhBmabNYlisxU1GiC5hsosM%2FlOtkg0j7qu%2BUEB%2B5KdXQw4p56z0unKocYXMyzpqKIohkEIWkwFUYCoGWjbkW8xImYArl%2FEBnVkV%2Fd0LzAFwEuuCGdnFmKzLH%2FJOpkoQTdg%2BNWwUgASVR7a35GPeL%2FHAxIuW42yQIIkw290lKkyB0ciNgvgQmfZVDbmJJw8nALnFWUOIx8S7vfDT5Sk7oD1p27AqpYrSYyJ1J7RPaU9DV60tngITD10sO2Bjq0AhBE3PJnXAlmVehblkCxLdERGvG%2BxR1SJQFGnC%2FgsdMYvRfGHqOF48EbReQkQCtSrAsJU%2B2t%2F6LTWZ6OqpUbCpoqflTDIRJR11eHqiDGMkiNo2zdw4ob23%2B0xBVPOcTu4JfMz9lCjsBdrHcvajIJYOh%2Br6JucE4%2FZCHr%2BVMbiRob8utj7yzFfyZTCbGiR6jA6WSeKIAyMGcAS4zRrrQYB1uw0ePgm%2BQeuQ5jwmTnNd8y4HRh3gesNBwVZ1zHXyQpPjfHZEhY7LmaKOF%2BFvEe0ItoxClfPnm%2FNFKqILlZZ8PG3lqriTN4G7XYwm5qYtlBGdjtP%2Bo13IbwceA3U38sc7ve7hYYVDVO4BDbEWwzvEiGoq0mKNbS%2FokkYz%2FWYbFsw88OqnDOWtiVrRLMuiWVBqyZHqx0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240829T215553Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIATQPD63CFES4NSMFY%2F20240829%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=44be7c3717c779d3c5078e6fdd64dd46203adb4b34dc734100d831049512d224',
      name: '30 days of vanilla JavaScript',
      projectLink: 'https://vanilla-js-projects-101.netlify.app/',
      techStack: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      description:
        'Long short term memory (LSTM) based load forecasting for electricity demand',
      githubLink: 'https://github.com/rishmi5h/final-year-project',
      imageUrl:
        'https://rishmi5h.s3.ap-south-1.amazonaws.com/portfolio/lstm.webp?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCmFwLXNvdXRoLTEiRjBEAiBZUKfKsHq0ZWDq6A6B8d6FY8xn%2FIsSaP%2B1tg%2BmFn293wIgXqGdiImBQAqNtDZp60L7si%2B0%2FrThj8P46UFDNfYNmKEq5AIITxAAGgwyNDE1MzMxMTQ1MDYiDJLrWH%2BH3%2FZzE8%2FiMirBAhbvuN5i3QdH6Zgs3FFpUNAG%2BjvplVB7MK5zyBqxi%2Bu0wO2eJBI0yLiDZaDpDyOsTfmeP1mi797G%2Bycx1TvXkD%2BIzq%2FgZtWy45oqPt1QzTD%2FRoN4eWZzhvIgNKqsU22XXxwLNIW0g%2F21iFHvNxjK9HqFhW8y55xCVRs3pmI8m57u6rfowQjRlF3fsW7GhBmabNYlisxU1GiC5hsosM%2FlOtkg0j7qu%2BUEB%2B5KdXQw4p56z0unKocYXMyzpqKIohkEIWkwFUYCoGWjbkW8xImYArl%2FEBnVkV%2Fd0LzAFwEuuCGdnFmKzLH%2FJOpkoQTdg%2BNWwUgASVR7a35GPeL%2FHAxIuW42yQIIkw290lKkyB0ciNgvgQmfZVDbmJJw8nALnFWUOIx8S7vfDT5Sk7oD1p27AqpYrSYyJ1J7RPaU9DV60tngITD10sO2Bjq0AhBE3PJnXAlmVehblkCxLdERGvG%2BxR1SJQFGnC%2FgsdMYvRfGHqOF48EbReQkQCtSrAsJU%2B2t%2F6LTWZ6OqpUbCpoqflTDIRJR11eHqiDGMkiNo2zdw4ob23%2B0xBVPOcTu4JfMz9lCjsBdrHcvajIJYOh%2Br6JucE4%2FZCHr%2BVMbiRob8utj7yzFfyZTCbGiR6jA6WSeKIAyMGcAS4zRrrQYB1uw0ePgm%2BQeuQ5jwmTnNd8y4HRh3gesNBwVZ1zHXyQpPjfHZEhY7LmaKOF%2BFvEe0ItoxClfPnm%2FNFKqILlZZ8PG3lqriTN4G7XYwm5qYtlBGdjtP%2Bo13IbwceA3U38sc7ve7hYYVDVO4BDbEWwzvEiGoq0mKNbS%2FokkYz%2FWYbFsw88OqnDOWtiVrRLMuiWVBqyZHqx0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240829T215553Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIATQPD63CFES4NSMFY%2F20240829%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=906afeb382144993ffcf1c6d7fd5ed29b0d1b610469fd35279be380c60a910d2',
      name: 'LSTM based load forecasting',
      projectLink:
        'https://drive.google.com/file/d/1nBQQUfHQqdP92OzcVOUmt2RFXrVNy6Sf/view',
      techStack: ['Machine Learning', 'Python', 'LSTM'],
    },
    {
      description: 'A fun game to test your knowledge of flags emojis.',
      githubLink: 'https://github.com/rishmi5h/know-the-flags',
      imageUrl:
        'https://rishmi5h.s3.ap-south-1.amazonaws.com/portfolio/know-the-flags.webp?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCmFwLXNvdXRoLTEiRjBEAiBZUKfKsHq0ZWDq6A6B8d6FY8xn%2FIsSaP%2B1tg%2BmFn293wIgXqGdiImBQAqNtDZp60L7si%2B0%2FrThj8P46UFDNfYNmKEq5AIITxAAGgwyNDE1MzMxMTQ1MDYiDJLrWH%2BH3%2FZzE8%2FiMirBAhbvuN5i3QdH6Zgs3FFpUNAG%2BjvplVB7MK5zyBqxi%2Bu0wO2eJBI0yLiDZaDpDyOsTfmeP1mi797G%2Bycx1TvXkD%2BIzq%2FgZtWy45oqPt1QzTD%2FRoN4eWZzhvIgNKqsU22XXxwLNIW0g%2F21iFHvNxjK9HqFhW8y55xCVRs3pmI8m57u6rfowQjRlF3fsW7GhBmabNYlisxU1GiC5hsosM%2FlOtkg0j7qu%2BUEB%2B5KdXQw4p56z0unKocYXMyzpqKIohkEIWkwFUYCoGWjbkW8xImYArl%2FEBnVkV%2Fd0LzAFwEuuCGdnFmKzLH%2FJOpkoQTdg%2BNWwUgASVR7a35GPeL%2FHAxIuW42yQIIkw290lKkyB0ciNgvgQmfZVDbmJJw8nALnFWUOIx8S7vfDT5Sk7oD1p27AqpYrSYyJ1J7RPaU9DV60tngITD10sO2Bjq0AhBE3PJnXAlmVehblkCxLdERGvG%2BxR1SJQFGnC%2FgsdMYvRfGHqOF48EbReQkQCtSrAsJU%2B2t%2F6LTWZ6OqpUbCpoqflTDIRJR11eHqiDGMkiNo2zdw4ob23%2B0xBVPOcTu4JfMz9lCjsBdrHcvajIJYOh%2Br6JucE4%2FZCHr%2BVMbiRob8utj7yzFfyZTCbGiR6jA6WSeKIAyMGcAS4zRrrQYB1uw0ePgm%2BQeuQ5jwmTnNd8y4HRh3gesNBwVZ1zHXyQpPjfHZEhY7LmaKOF%2BFvEe0ItoxClfPnm%2FNFKqILlZZ8PG3lqriTN4G7XYwm5qYtlBGdjtP%2Bo13IbwceA3U38sc7ve7hYYVDVO4BDbEWwzvEiGoq0mKNbS%2FokkYz%2FWYbFsw88OqnDOWtiVrRLMuiWVBqyZHqx0&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240829T215553Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIATQPD63CFES4NSMFY%2F20240829%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=016b30e9d58216201303cf2963df7ea0ebebf96ec775f648e543415b1601cd98',
      name: 'Know The Flags',
      projectLink: 'https://flags-emoji.netlify.app/',
      techStack: ['React', 'Tailwind CSS'],
    },
    // Add more projects as needed
  ];

  return (
    <div
      className={`min-h-[80vh] py-12 ${isDarkMode ? darkModeColor : lightModeColor} transition-colors duration-300`}
    >
      <div className="container mx-auto px-4">
        <h1
          className={`mb-8 text-center text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
        >
          my projects
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
