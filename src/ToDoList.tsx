import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    console.log("입력한 할일은 ", data.toDo);
    setValue("toDo", "");
  };
  console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", { required: "해야 할 일을 입력하세요." })}
          placeholder="해야 할 일"
        />

        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
