const projects = {
    name: "My Projects",
    projects: [
        {
            id: 0,
            name: "SoManyEnchants",
            description: "SoManyEncahnts is an enchantment mod for Minecraft. It adds a wide variety of enchantments to the game.",
            link: "https://www.curseforge.com/minecraft/mc-mods/enchants",
            source: "https://github.com/YeetmanLord/So-Many-Enchants"
        },
        {
            id: 1,
            name: "RayCastUtility",
            description: "This is a simple Bukkit utility to handle raycasting for versions before a standard variant was implemented",
            link: "https://www.spigotmc.org/resources/raycastutility.105956/",
            source: "https://github.com/YeetmanLord/RayCastUtility"
        },
        {
            id: 2,
            name: "ReflectionAPI",
            description: "A Spigot API to handle reflection and allow for smoother integration of multiple version compatable NMS code. This API includes mappings for classes, packages, fields, and methods, along with NMS object wrappers.",
            link: "https://github.com/YeetmanLord/ReflectionAPI",
            source: "https://github.com/YeetmanLord/ReflectionAPI"
        },
        {
            id: 3,
            name: "ZetaCore",
            description: "Core API for all of my main Spigot plugins. This plugin also acts as a manager for any plugins I create.",
            link: "https://github.com/YeetmanLord/ZetaCore",
            source: "https://github.com/YeetmanLord/ZetaCore"
        },
        {
            id: 4,
            name: "BedwarsZeta",
            description: "A spigot bedwars plugin that brings an unparalleled level of customizability."
        },
        {
            id: 5,
            name: "LaserWeaponry",
            description: "A Spigot plugin that adds a variety of laser weapons to the game.",
            link: "https://www.spigotmc.org/resources/laser-weaponry.106191/",
            source: "https://github.com/YeetmanLord/LaserWeaponry"
        }
    ]
}

function Project({ name, description, link, source }) {
    let nameElem = link === undefined ? name : <a className="project-link" href={link} target="_blank">{name}</a>;
    let sourceElem = source === undefined ? "" : <a href={source} target="_blank" className="project-link">Source</a>;
    if (source !== undefined) {
        return (
            <li>{nameElem} - {description} - {sourceElem}</li>
        );
    } else {
        return (
            <li>{nameElem} - {description}</li>
        );
    }
}

function Projects() {
    let projectList = projects.projects.map((project) => {
        return <Project key={project.id} name={project.name} description={project.description} link={project.link} source={project.source} />
    });

    return <>
        <h2>{projects.name}</h2>
        <ul>{projectList}</ul>
    </>;
}

const rootNodeProjects = document.getElementById('projects-root');
const rootProjects = ReactDOM.createRoot(rootNodeProjects);
rootProjects.render(<Projects />);