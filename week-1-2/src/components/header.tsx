// props: {
//  title: ""
// }

interface HeaderInterface {
  list: string[];
}

export const Header = ({ list }: HeaderInterface) => {
  return (
    <div>
      {list.map((link) => {
        const upperCaseLink = link.toUpperCase();

        return <a>{upperCaseLink}</a>;
      })}
    </div>
  );
};
