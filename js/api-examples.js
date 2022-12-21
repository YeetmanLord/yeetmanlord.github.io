let tags = {
    "NMS": ["#00f0ff", "black"],
    "ReflectionAPI": ["#f52525", "white"],
    "ZetaCore": ["gold", "white"],
}

let subCategories = {
    "ReflectionAPI": ["NMSObjectReflection"],
    "": []
}

let apiExamples = [
    {
        name: "NMSObjectReflection class example",
        description: "A wrapper to handle reflection for NMS objects. In this example, we are wrapping an NMS object we previously got. This is useful for handling the return types of NMS methods when they are another NMS object. This example specifically is dealing with the result of 'getNavigation' from an NMS entity",
        code: "NMSEntityReflection entityReflection = new NMSEntityReflection(someEntity);\nNMSObjectReflection navigationReflection = new NMSObjectReflection(entityReflection\n\t.invokeMethodForNmsObject(\"getNavigation\"));\nnavigationReflection.invokeMethodForNmsObject(\"a\",\n\tnew Class[] { double.class, double.class, double.class, double.class },\n\tnew Object[] { randLoc.getX(), randLoc.getY(), randLoc.getZ(), 1.0D }); // This method sets the entity's navigation target to the given location",
        category: "ReflectionAPI",
        subCategory: "NMSObjectReflection",
        tags: ["NMS", "ReflectionAPI"]
    }
]

function SearchBar({ category, subCategory, searchTerm, searchTags, setCategory, setSubCategory, setSearchTerm, setTags }) {
    let id = 0;
    let subs = subCategories[category].map((sub) => {
        id += 1;
        return <option key={id - 1} value={sub}>{sub}</option>;
    });

    let tagElems = searchTags.map((tag) => {
        return <div key={tag} style={{ backgroundColor: tags[tag][0], color: tags[tag][1] }} className="tag-small"><span>{tag}</span></div>;
    });

    let allTags = Object.keys(tags).map((tag) => {
        let classes = "select-tag" + (searchTags.includes(tag) ? " active" : "");
        return <div key={tag} value={tag} className={classes} onClick={setTags}>{tag}</div>;
    });

    return (
        <div className="search-bar">
            <input type="text" placeholder="Search" onChange={setSearchTerm} value={searchTerm}/>
            <select onChange={setCategory} value={category}>
                <option value="">All categories</option>
                <option value="ReflectionAPI">ReflectionAPI</option>
            </select>
            <select onChange={setSubCategory} value={subCategory}>
                <option value="">All sub-categories</option>
                <>{subs}</>
            </select>
            <div className="tag-box" onClick={(e) => {
                if (document.getElementsByClassName("tag-select")[0].style.display == "block") {
                    document.getElementsByClassName("tag-select")[0].style.display = "none"
                }
                else document.getElementsByClassName("tag-select")[0].style.display = "block"
            }}>
                <>{tagElems}</>
                <div className="tag-select" style={{display: "none"}}>
                    <>{allTags}</>
                </div>
            </div>

        </div>
    );
}

function ApiExample({ name, description, code, codeTag }) {
    let id = 0;
    let tagElems = codeTag.map((tag) => {
        id += 1;
        return <div key={id - 1} style={{ backgroundColor: tags[tag][0], color: tags[tag][1] }} className="tag"><span>{tag}</span></div>;
    });

    return (
        <div className="api-example">
            <h3>{name}</h3>
            <div className="tags">{tagElems}</div>
            <p className="code-description">{description}</p>
            <pre className="code"><code className="language-java">{code}</code></pre>
        </div>
    );
}

function ApiExamples() {
    const [category, setCategory] = React.useState("");
    const [subCategory, setSubCategory] = React.useState("");
    const [tags, setTags] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState("");

    function handleCategoryChange(event) {
        setCategory(event.target.value);
    }

    function handleSubCategoryChange(event) {
        setSubCategory(event.target.value);
    }

    function handleSearchTermChange(event) {
        setSearchTerm(event.target.value);
    }

    function handleTagsChange(event) {
        let tag = event.target.getAttribute("value");
        if (tags.includes(tag)) {
            setTags(tags.filter((t) => t != tag));
        } else {
            setTags([...tags, tag]);
        }
    }

    React.useEffect(() => {
        hljs.highlightAll();
    });

    let filteredExamples = JSON.parse(JSON.stringify(apiExamples));

    if (searchTerm !== "") { // Search term entered, pick all examples with search term in name or description
        filteredExamples = filteredExamples.filter((example) => {
            return example.name.toLowerCase().includes(searchTerm.toLowerCase()) || example.description.toLowerCase().includes(searchTerm.toLowerCase());
        });
    }

    if (tags.length > 0) { // Tags selected, pick all examples with tags 
        filteredExamples = filteredExamples.filter((example) => {
            let r = false;
            tags.forEach((tag) => {
                if (example.tags.includes(tag)) { // Contains ANY of the tags
                    r = true;
                    return;
                }
            });
            return r;
        });
    }

    if (subCategory !== "") { // Subcategory selected, pick all examples with subcategory
        filteredExamples = filteredExamples.filter((example) => {
            return example.subCategory === subCategory;
        });
    }

    if (category !== "") { // Category selected, pick all examples with category
        filteredExamples = filteredExamples.filter((example) => {
            return example.category === category;
        });
    }

    for (let i = 0; i < filteredExamples.length; i++) {
        filteredExamples[i].id = i;
    }

    let exampleList = filteredExamples.map((example) => {
        return <ApiExample key={example.id} name={example.name} description={example.description} code={example.code} codeTag={example.tags} />
    });

    return <><SearchBar category={category} subCategory={subCategory} searchTags={tags} 
        searchTerm={searchTerm} setCategory={handleCategoryChange} setSearchTerm={handleSearchTermChange} 
        setSubCategory={handleSubCategoryChange} setTags={handleTagsChange} />{exampleList}</>;

}


const rootNode = document.getElementById('api-example-root');
const root = ReactDOM.createRoot(rootNode);
root.render(<ApiExamples />);