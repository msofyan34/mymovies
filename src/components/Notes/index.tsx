"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

function Todo() {
  const [inputTodo, setInputTodo] = useState("");
  const [todo, setTodo] = useState([
    "Watch Kingdom of the Planet of the Apes",
    "Watch Furiosa: A Mad Max Saga",
    "Watch Atlas",
  ]);

  function handleInput(e: any) {
    setInputTodo(e.target.value);
  }

  function addTodo(e: any) {
    e.preventDefault();
    setTodo([...todo, inputTodo]);

    setInputTodo("");
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="container mx-auto px-auto">
        <Card className="mx-auto mt-5 w-full max-w-md">
          <CardHeader>
            <CardTitle>Notes Movie</CardTitle>
          </CardHeader>
          <CardContent>
            <form action="">
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Input
                    type="text"
                    placeholder="Input your todo.."
                    value={inputTodo}
                    onChange={handleInput}
                  />
                </div>
                <Button onClick={addTodo}>Create</Button>
              </div>
            </form>
          </CardContent>
        </Card>
        <div className="mx-auto mb-5 mt-5 max-w-2xl">
          <Card>
            <CardContent>
              <table className="mt-5 min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Task Name
                    </th>
                  </tr>
                </thead>
                {todo.map((item, index) => (
                  <tbody
                    key={index}
                    className="divide-y divide-gray-200 bg-white"
                  >
                    <tr>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                        <Input
                          className="form-checkbox h-5 w-5 text-gray-600"
                          type="checkbox"
                        />
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {item}
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Todo;
