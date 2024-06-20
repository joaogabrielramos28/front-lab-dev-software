const URL = "http://localhost:8000";

type CreateAccountParams = {
  email: string;
  name: string;
  password: string;
};

type LoginParams = {
  email: string;
  password: string;
};
type GetPasswordsParams = {
  codcli: number;
};
type PostPasswordsParams = {
  codcli: number;
  service_name: string;
  service_email: string;
  password: string;
};
type PutPasswordsParams = {
  codPass: number;
  codcli: number;
  service_name: string;
  service_email: string;
  password: string;
};
type DeletePasswordsParams = {
  codPass: number;
};

type DeleteAccountParams = {
  codcli: number;
};

type CreateAccountResponse = {
  email: string;
  password: string;
  codcli: number;
  name: string;
  is_admin: boolean;
};

export type GetPasswordsResponse = {
  codcli: number;
  id_position: number;
  service_name: string;
  service_email: string;
  password: string;
};

export class Service {
  private route = {
    register: "/user/post_user",
    login: "/user/login",
    getPass: "/user/get_my_positions",
    postPass: "/user/post_position",
    putPass: "/user/put_position",
    deletePass: "/user/delete_position",
    deleteAccount: "/user/delete_my_account",
  };

  async CreateAccount(
    params: CreateAccountParams
  ): Promise<CreateAccountResponse> {
    const response = await fetch(`${URL}${this.route.register}`, {
      method: "POST",
      body: JSON.stringify({ ...params, is_admin: false }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "An error occurred");
    }

    const data = await response.json();
    return data;
  }

  async Login({ email, password }: LoginParams) {
    const response = await fetch(`${URL}${this.route.login}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "An error occurred");
    }

    const data = await response.json();
    return data;
  }
  async GetPasswords({
    codcli,
  }: GetPasswordsParams): Promise<GetPasswordsResponse[]> {
    const response = await fetch(`${URL}${this.route.getPass}/${codcli}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "An error occurred");
    }
    if (response.status === 204) return [];
    const data = await response.json();
    return data;
  }

  async CreatePasswords(params: PostPasswordsParams) {
    const response = await fetch(`${URL}${this.route.postPass}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...params, key: "" }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "An error occurred");
    }

    const data = await response.json();
    return data;
  }
  async UpdatePasswords({
    codPass,
    codcli,
    service_email,
    service_name,
    password,
  }: PutPasswordsParams) {
    const response = await fetch(`${URL}${this.route.putPass}/${codPass}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ codcli, service_email, service_name, password }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "An error occurred");
    }

    const data = await response.json();
    return data;
  }
  async DeletePassword({ codPass }: DeletePasswordsParams) {
    const response = await fetch(`${URL}${this.route.deletePass}/${codPass}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "An error occurred");
    }

    const data = await response.json();
    return data;
  }

  async DeleteAccount({ codcli }: DeleteAccountParams) {
    const response = await fetch(
      `${URL}${this.route.deleteAccount}/${codcli}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "An error occurred");
    }

    const data = await response.json();
    return data;
  }
}
