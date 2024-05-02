import { message } from "antd";
import { useMutation, useQuery } from "react-query";

export const useGetUser = () => {
  return useMutation(async (id) => {
    const response = await fetch(`http://localhost:4000/users/${id}`, {
      credentials: "include",
    });
    const data = await response.json();
    if (!response.ok) {
      message.error(data.message);
      throw new Error(data.message);
    } else {
      return data;
    }
  });
};

export const useUpdateUser = () => {
  return useMutation(
    async (values) => {
      const response = await fetch(`http://localhost:4000/users/${values.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
        credentials: "include",
      });
      const data = await response.json();
      if (!response.ok) {
        message.error(data.message);
        throw new Error(data.message);
      } else {
        return data;
      }
    },
    {
      onSuccess: () => {
        message.success("User data updated successfully");
      },
    },
    {
      onError: () => {
        message.error("Failed to update user data");
      },
    }
  );
};

export const useGetAllUsers = () => {
  return useQuery("users", async () => {
    const response = await fetch("http://localhost:4000/users", {
      credentials: "include",
    });
    const data = await response.json();
    if (!response.ok) {
      message.error(data.message);
      throw new Error(data.message);
    } else {
      return data;
    }
  });
};

export const useDeleteUser = () => {
  return useMutation(async (id) => {
    const response = await fetch(`http://localhost:4000/users/${id}`, {
      credentials: "include",
      method: "DELETE",
    });
    const data = await response.json();
    if (!response.ok) {
      message.error(data.message);
      throw new Error(data.message);
    } else {
      return data;
    }
  });
};

export const useAddUser = () => {
  return useMutation(
    async (values) => {
      const response = await fetch("http://localhost:4000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (!response.ok) {
        message.error(data.message);
        throw new Error(data.message);
      } else {
        return data;
      }
    },
    {
      onSuccess: () => {
        message.success("User added successfully");
      },
    },
    {
      onError: () => {
        message.error("Failed to add user");
      },
    }
  );
};

export const useUploadAvatar = () => {
    return useMutation(async (formData) => {
      const response = await fetch("http://localhost:4000/users/image", {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      
      const data = await response.json();
  
      if (!response.ok) {
        message.error(data.message);
        throw new Error(data.message);
      } else {
        return data;
      }
    },{
        onSuccess: () => {
            message.success("Avatar uploaded successfully");
        },
        },{
        onError: () => {
            message.error("Failed to upload avatar");
        },
    });
  };