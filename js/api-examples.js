/*
* Tags are formatted as follows: "tag": ["background-color", "text-color"]
*/
let tags = {
    "NMS": ["#00f0ff", "black"],
    "ReflectionAPI": ["#f52525", "white"],
    "ZetaCore": ["gold", "white"],
    "Initialization": ["rgba(26, 196, 196, 0.66)", "white"],
    "Maven": ["rgb(9, 25, 154)", "white"],
    "GUIs": ["rgb(123, 60, 154)", "white"]
}

let subCategories = {
    "ReflectionAPI": ["NMSObjectReflection", "Initialization"],
    "ZetaCore": ["Initialization", "GUIs"],
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
    },
    {
        name: "Initializing ReflectionAPI",
        description: "This is the first thing you need to do when using ReflectionAPI. This will initialize the ReflectionAPI and allow you to use it. This should be done in your onEnable method.",
        code: "public void onEnable() {\n\tReflectionAPI.init(this);\n\t•••\n}",
        category: "ReflectionAPI",
        subCategory: "Initialization",
        tags: ["ReflectionAPI", "Initialization"],
    },
    {
        name: "Adding ReflectionAPI as a dependency using jitpack and Maven",
        description: "Use the following Maven dependency to add ReflectionAPI to your project. You can find the latest version on the ReflectionAPI GitHub page. Ensure to add the jitpack repository to your pom.xml file.",
        code: "<dependency>\n\t<groupId>com.github.YeetManLord</groupId>\n\t<artifactId>ReflectionAPI</artifactId>\n\t<version>version</version>\n</dependency>",
        category: "ReflectionAPI",
        subCategory: "Initialization",
        tags: ["ReflectionAPI", "Maven", "Initialization"],
        language: "xml"
    },
    {
        name: "Adding ZetaCore as a dependency using jitpack and Maven",
        description: "Use the following Maven dependency to add ZetaCore to your project. You can find the latest version on the ZetaCore GitHub page. Ensure to add the jitpack repository to your pom.xml file.",
        code: "<dependency>\n\t<groupId>com.github.YeetManLord</groupId>\n\t<artifactId>ZetaCore</artifactId>\n\t<version>version</version>\n</dependency>",
        category: "ZetaCore",
        subCategory: "Initialization",
        tags: ["ZetaCore", "Maven", "Initialization"],
        language: "xml"
    },
    {
        name: "Creating a simple GUI using ZetaCore",
        description: "This is a simple example of how to create a GUI using ZetaCore. This example uses ZetaCore's AbstractGUIMenu class to implement a simple GUI as well as that class's methods to easily create items and add them to the GUI. This will create a menu where the player can click on items to get them. The menu will have 54 slots and will be titled \"Test Menu\" with a gold coloring. There is also a secret feature where if you click a specific slot, you will get a secret diamond.",
        code: "import com.github.yeetmanlord.zeta_core.api.util.input.PlayerUtil;\nimport org.bukkit.Material;\nimport org.bukkit.event.inventory.InventoryClickEvent;\n\npublic class SimpleMenu extends AbstractGUIMenu {\n\n\tpublic SimpleMenu(PlayerUtil menuUtil) {\n\t\tsuper(menuUtil, \"&6Test Menu\", 54); // Supports formatting codes\n\t}\n\n\t@Override\n\tpublic void setItems() {\n\t\t// Set items here\n\t\tthis.inv.setItem(0, makeItem(Material.DIAMOND, \"&bDiamond\"));\n\t\tthis.inv.setItem(1, makeItem(Material.GOLD_INGOT, \"&6Gold\"));\n\t\tthis.inv.setItem(2, makeItem(Material.IRON_INGOT, \"&fIron\"));\n\t\tthis.inv.setItem(3, makeItem(Material.COAL, \"&8Coal\"));\n\t\tthis.inv.setItem(4, makeItem(Material.REDSTONE, \"&cRedstone\"));\n\t\tthis.inv.setItem(5, makeItem(Material.BARRIER, \"&cBarrier\", \"&7Click me to get a barrier\")); // Supports lore and formatting codes\n\t}\n\n\t@Override\n\tpublic void handleClick(InventoryClickEvent e) {\n\t\t// Handle clicks here\n\t\t// If the player clicks on an item, this method will be called\n\t\tswitch (e.getSlot()) {\n\t\t\tcase 0:\n\t\t\t\tthis.owner.getInventory().addItem(makeItem(Material.DIAMOND, \"&bDiamond\"));\n\t\t\t\tbreak;\n\t\t\tcase 1:\n\t\t\t\tthis.owner.getInventory().addItem(makeItem(Material.GOLD_INGOT, \"&6Gold\"));\n\t\t\t\tbreak;\n\t\t\tcase 2:\n\t\t\t\tthis.owner.getInventory().addItem(makeItem(Material.IRON_INGOT, \"&fIron\"));\n\t\t\t\tbreak;\n\t\t\tcase 3:\n\t\t\t\tthis.owner.getInventory().addItem(makeItem(Material.COAL, \"&8Coal\"));\n\t\t\t\tbreak;\n\t\t\tcase 4:\n\t\t\t\tthis.owner.getInventory().addItem(makeItem(Material.REDSTONE, \"&cRedstone\"));\n\t\t\t\tbreak;\n\t\t\tcase 5:\n\t\t\t\tthis.owner.getInventory().addItem(makeItem(Material.BARRIER, \"&cBarrier\"));\n\t\t\t\tbreak;\n\t\t}\n\t}\n\n\t@Override\n\tpublic void handleClickAnywhere(InventoryClickEvent e) {\n\t\t// However, if you want to handle clicks anywhere in the inventory, use this method\n\t\tsuper.handleClickAnywhere(e);\n\t\tif (e.getSlot() == 12) {\n\t\t\tthis.owner.getInventory().addItem(makeItem(Material.DIAMOND, \"&4Secret Diamond\"));\n\t\t}\n\t}\n}",
        category: "ZetaCore",
        subCategory: "GUIs",
        tags: ["ZetaCore", "GUIs"],
    },
    {
        name: "Implementing chat input for a GUI using ZetaCore",
        description: "This is an example of how to implement chat input for a GUI using ZetaCore. This builds off of the `Creating a simple GUI using ZetaCore` example. However, to get a barrier, the player must type \"barrier\" in chat. This will also close the GUI and send a title to the player.",
        code: "public class SimpleGUI extends AbstractGUIMenu implements IChatInputable {\n    •••\n    @Override\n    public void handleClick(InventoryClickEvent e) {\n        // Handle clicks here\n        // If the player clicks on an item, this method will be called\n        switch (e.getSlot()) {\n            •••\n            case 5:\n                // Initialize chat input\n                this.menuUtil.setMenuToInputTo(this);\n                this.menuUtil.setTakingChatInput(true);\n                // Input Type is used to determine what to do with the input\n                this.setInputType(InputType.STRING);\n                this.menuUtil.setGUIMenu(true);\n                // Synchronously close menu, since InventoryClick is called asynchronously\n                this.syncClose();\n                // Send title packets\n                this.sendTitlePackets(\"&6You must enter a password!\");\n                break;\n        }\n    }\n\n    @Override\n    public void processChatInput(InputType type, AsyncPlayerChatEvent event) {\n        // Process chat input here\n        if (type == InputType.STRING) {\n            if (event.getMessage().trim().equals(\"barrier\")) {\n                // Synchronously give player item\n                Bukkit.getScheduler().runTask(MyPlugin.getInstance(), () -> owner.getInventory().addItem(new ItemStack(Material.BARRIER)));\n            }\n        }\n    }\n}",
        category: "ZetaCore",
        subCategory: "GUIs",
        tags: ["ZetaCore", "GUIs"],
    },
    {
        name: "Implementing player inventory input for a GUI using ZetaCore",
        description: "This is an example of how to implement player inventory input for a GUI using ZetaCore. This builds off of the `Creating a simple GUI using ZetaCore` example. However, if the player clicks on the barrier, an input menu will open. The player must input a diamond sword into the input menu. If they do, they get a barrier. If they don't they get a stone sword.",
        code: "public class SimpleMenu extends AbstractGUIMenu implements IPlayerInputMenuInputable {\n\n\t•••\n\t@Override\n\tpublic void handleClick(InventoryClickEvent e) {\n\t\t// Handle clicks here\n\t\t// If the player clicks on an item, this method will be called\n\t\tswitch (e.getSlot()) {\n\t\t\t•••\n\t\t\tcase 5:\n\t\t\t\t// Open input menu\n\t\t\t\tnew PlayerInputMenu(this).open();\n\t\t\t\tbreak;\n\t\t}\n\t}\n\n\t@Override\n\tpublic void setInputValuesFromInputMenu(InventoryClickEvent event) {\n\t\t// Handle player's input here\n\t\tif (event.getCurrentItem() != null && event.getCurrentItem().getType() != Material.AIR) {\n\t\t\tItemStack item = event.getCurrentItem();\n\t\t\tif (item.getType() == Material.DIAMOND_SWORD) {\n\t\t\t\tBukkit.getScheduler().runTask(MyPlugin.getInstance(), () -> this.owner.getInventory().addItem(new ItemStack(Material.BARRIER)));\n\t\t\t} else {\n\t\t\t\tBukkit.getScheduler().runTask(MyPlugin.getInstance(), () -> this.owner.getInventory().addItem(new ItemStack(Material.STONE_SWORD)));\n\t\t\t}\n\t\t}\n\t}\n}",
        category: "ZetaCore",
        subCategory: "GUIs",
        tags: ["ZetaCore", "GUIs"],
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

function ApiExample({ name, description, code, codeTag, language }) {
    let id = 0;
    let tagElems = codeTag.map((tag) => {
        id += 1;
        return <div key={id - 1} style={{ backgroundColor: tags[tag][0], color: tags[tag][1] }} className="tag"><span>{tag}</span></div>;
    });

    let languageClass = "language-java";
    if (language !== undefined) {
        languageClass = "language-" + language;
    }

    return (
        <div className="api-example">
            <h3>{name}</h3>
            <div className="tags">{tagElems}</div>
            <p className="code-description">{description}</p>
            <pre className="code"><code className={languageClass}>{code}</code></pre>
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
        return <ApiExample key={example.id} name={example.name} description={example.description} code={example.code} codeTag={example.tags} language={example.language} />
    });

    return <><SearchBar category={category} subCategory={subCategory} searchTags={tags} 
        searchTerm={searchTerm} setCategory={handleCategoryChange} setSearchTerm={handleSearchTermChange} 
        setSubCategory={handleSubCategoryChange} setTags={handleTagsChange} />{exampleList}</>;

}


const rootNode = document.getElementById('api-example-root');
const root = ReactDOM.createRoot(rootNode);
root.render(<ApiExamples />);