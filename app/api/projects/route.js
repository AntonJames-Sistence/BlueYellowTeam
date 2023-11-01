import { NextResponse, NextRequest } from "next/server";
import {
  Database,
  push,
  set,
  ref,
  get,
  remove,
  update,
} from "firebase/database";
import { DB } from "../../../data/firebase";
import { error } from "console";

function isntValidProject(project) {
  const errors = {};

  if (!project.title) errors.name = "Project needs a title";
  if (!project.img) errors.img = "project needs an image";
  if (!project.para) errors.para = "project needs a description";

  if (Object.values(errors).length) return errors;
  return false;
}

export async function GET() {
  try {
    const projectRef = ref(DB, "projects");
    const snapshot = await get(projectRef);

    return NextResponse.json(Object.values(snapshot.val()));
  } catch (error) {
    return NextResponse.error(error);
  }
}

export async function POST(request) {
  const requestData = await request.json();

  try {
    const projectsRef = ref(DB, "projects/");

    const errors = isntValidProject(requestData);
    console.log(errors);

    if (errors) {
      return NextResponse.json(errors);
    }

    const newProj = push(projectsRef);
    const newProjObj = { id: newProj.key, ...requestData };
    await set(newProj, newProjObj);

    return NextResponse.json(newProjObj);
  } catch (error) {
    return NextResponse.error(error);
  }
}

export async function PUT(request) {
  const requestData = await request.json();

  try {
    const errors = isntValidProject(requestData);

    if (errors) {
      return NextResponse.json(errors);
    }

    const updates = {};
    updates[`/projects/${requestData.id}`] = requestData;
    update(ref(DB), updates);
  } catch (error) {
    return NextResponse.error(error);
  }
}
