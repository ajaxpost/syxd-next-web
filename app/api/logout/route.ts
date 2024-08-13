import { type NextRequest } from 'next/server';
import { cookies } from 'next/headers';

/**
 * 退出登录 api
 *  */
export async function POST(request: NextRequest) {
  const url = process.env.NEXT_PUBLIC_REQUEST_URL;
  const cookieStorge = cookies();
  const token = cookieStorge.get('token');
  const result = await fetch(url + '/bg-ry/logout', {
    method: 'get',
    headers: {
      Authorization: 'Bearer ' + token?.value,
    },
  });
  const data = await result.json();
  return Response.json(data);
}
