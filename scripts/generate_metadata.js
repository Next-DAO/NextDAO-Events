const fs = require("fs");

const metadataPath = "./metadata/";
const baseURI = "https://d21iehwzq7iye8.cloudfront.net/";
const desc = "NextDAO Events is a collection of events hosted by NextDAO.";

const nextalkMD = async () => {
  const indexes = [...Array(26).keys()];

  for (const index of indexes) {
    const id = index + 1;
    const metadata = {
      name: `Nextalk #${id}`,
      description: desc,
      image: `${baseURI}images/${id}.png`,
      attributes: [
        { trait_type: "Event", value: "Nextalk" },
        { trait_type: "Type", value: "AMA" },
      ],
    };

    await fs.writeFileSync(`${metadataPath}${id}`, JSON.stringify(metadata));
  }
};

const nextloveMD = async () => {
  const indexes = [2001, 2002, 2003, 2004, 2006];

  for (const id of indexes) {
    const metadata = {
      name: `NextLove #${id - 2000}`,
      description: desc,
      image: `${baseURI}images/${id}.png`,
      attributes: [
        { trait_type: "Event", value: "NextLove" },
        { trait_type: "Type", value: "Dating" },
      ],
    };

    await fs.writeFileSync(`${metadataPath}${id}`, JSON.stringify(metadata));
  }
};

//nextalkMD();
nextloveMD();
