import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { error } = await supabase
      .from("coordination_debt_leads")
      .insert({
        email: body.email,
        user_name: body.userName,
        company: body.company,
        headcount: body.headcount,
        avg_cost: body.avgCost,
        overhead_pct: body.overheadPct,
        industry: body.industry,
        org_maturity: body.orgMaturity,
        ai_stage: body.aiStage,
        estimated_debt: body.estimatedDebt,
      });

    if (error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json(
      { success: false, error: "server_error" },
      { status: 500 }
    );
  }
}
