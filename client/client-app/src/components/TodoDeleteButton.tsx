import { deleteTodos } from "@/utils/todo-operations"

type Props = {
  id: string
}

export const TodoDeleteButton = (props: Props) => {

  const { id } = props;

  const onClickButton = async () => {
    await deleteTodos(id);
  };

  return (
    <button type="submit" onClick={onClickButton}>Delete</button>
  );

}