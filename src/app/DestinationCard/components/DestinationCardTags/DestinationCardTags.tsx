import { Box, Chip } from "@mui/material";
import * as styles from "./styles";
import { DestinationCardTagsProps } from "./types";

const DestinationCardTags = ({ tags }: DestinationCardTagsProps) => {
  return (
    <Box sx={styles.tagsContainer}>
      {tags.map((tag) => (
        <Chip key={tag.tagId} sx={styles.tag} label={tag.alias} />
      ))}
    </Box>
  );
};

export default DestinationCardTags;
