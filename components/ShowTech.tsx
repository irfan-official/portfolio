export default function ShowTech() {
  const height: string = "lg:h-9";
  return (
    <div className=" min-h-full  border border-gray-700 p-2 rounded-lg overflow-x-auto mt-8 mx-auto">
      <table className="w-full border-collapse">
        <tbody className="divide-y divide-gray-700">
          {/* Languages */}
          <tr className="align-top">
            <td className="py-4 pr-4 font-semibold text-white w-48">
              Languages
            </td>
            <td className="py-4 flex flex-wrap gap-2">
              <img
                src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
                alt="JavaScript"
                className={height}
              />
              <img
                src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"
                alt="TypeScript"
                className={height}
              />
            </td>
          </tr>

          {/* Frontend Technologies */}
          <tr className="align-top">
            <td className="py-4 pr-4 font-semibold text-white">Frontend</td>
            <td className="py-4 flex flex-wrap gap-2 ">
              <img
                src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                alt="HTML5"
                className={height}
              />
              <img
                src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                alt="CSS3"
                className={height}
              />
              <img
                src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
                alt="TailwindCSS"
                className={height}
              />
              <img
                src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"
                alt="React"
                className={height}
              />
              <img
                src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"
                alt="Next.js"
                className={height}
              />
            </td>
          </tr>

          {/* Back-End Development */}
          <tr className="align-top">
            <td className="py-4 pr-4 font-semibold text-white">Back-End</td>
            <td className="py-4 flex flex-wrap gap-2">
              <img
                src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"
                alt="Node.js"
                className={height}
              />
              <img
                src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"
                alt="Express.js"
                className={height}
              />
              <img
                src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white"
                alt="Prisma"
                className={height}
              />
              <img
                src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white"
                alt="Mongoose"
                className={height}
              />
            </td>
          </tr>

          {/* Database */}
          <tr className="align-top">
            <td className="py-4 pr-4 font-semibold text-white">Database</td>
            <td className="py-4 flex flex-wrap gap-2">
              <img
                src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"
                alt="MongoDB"
                className={height}
              />
              <img
                src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"
                alt="PostgreSQL"
                className={height}
              />
              <img
                src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white"
                alt="Redis"
                className={height}
              />
            </td>
          </tr>

          {/* Tools & Platforms */}
          <tr className="align-top">
            <td className="py-4 pr-4 font-semibold text-white">
              Tools & Platforms
            </td>
            <td className="py-4 flex flex-wrap gap-2">
              <img
                src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"
                alt="Git"
                className={height}
              />
              <img
                src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"
                alt="GitHub"
                className={height}
              />
              <img
                src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black"
                alt="Firebase"
                className={height}
              />
              <img
                src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white"
                alt="JWT"
                className={height}
              />
              <img
                src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"
                alt="Postman"
                className={height}
              />
              <img
                src="https://img.shields.io/badge/VS%20Code-0078D4?style=for-the-badge&logo=visual-studio-code&logoColor=white"
                alt="VS Code"
                className={height}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
