export interface userInfoProps {
  msg: string;
  code: number;
  permissions: string[];
  roles: string[];
  user: {
    createBy: string;
    createTime: string;
    updateBy: null;
    updateTime: null;
    remark: string;
    params: Record<string, string>;
    userId: number;
    tenantId: string;
    deptId: number;
    userName: string;
    nickName: string;
    email: string;
    phonenumber: string;
    sex: string;
    avatar: string;
    password: string;
    emailStatus: string;
    smsStatus: string;
    whChatStatus: null;
    code: null;
    status: string;
    delFlag: string;
    loginIp: string;
    loginDate: string;
    dept: {
      createBy: null;
      createTime: null;
      updateBy: null;
      updateTime: null;
      remark: null;
      params: [];
      deptId: number;
      tenantId: null;
      parentId: null;
      ancestors: null;
      deptName: null;
      orderNum: null;
      leader: null;
      phone: null;
      email: null;
      status: null;
      delFlag: null;
      parentName: null;
      children: [];
    };
    roles: [];
    roleIds: null;
    postIds: null;
    roleId: null;
    admin: boolean;
  };
}

export interface NavConfigProps {
  label: string;
  path?: string;
  target?: string;
  children?: NavConfigProps[];
}
