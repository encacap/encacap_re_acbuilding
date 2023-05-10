import { ProjectDataType } from "@interfaces/dataTypes";
import HomeNewsItemContainer from "../components/NewsItemContainer";

interface HomeProjectListItemProps {
  data: ProjectDataType;
}

const HomeProjectListItem = ({ data }: HomeProjectListItemProps) => (
  <HomeNewsItemContainer data={data}>
    <div className="px-4 py-4 md:px-6 md:py-4">
      <h3 className="text-center font-semibold text-encacap-main">{data.name}</h3>
    </div>
  </HomeNewsItemContainer>
);

export default HomeProjectListItem;