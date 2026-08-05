CREATE TABLE public.goals (
	id uuid
	NOT NULL
	PRIMARY KEY
	DEFAULT gen_random_uuid(),
	user_id uuid
	NOT NULL
	REFERENCES auth.users (id) ON DELETE CASCADE
	DEFAULT auth.uid(),
	name text NOT NULL,
	price int NOT NULL,
	url text,
	purchased_at TIMESTAMP WITH TIME ZONE,
	created_at TIMESTAMP WITH TIME ZONE
	NOT NULL
	DEFAULT NOW()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE goals TO authenticated;

CREATE INDEX IF NOT EXISTS "idx_goals_user_id" ON goals USING btree (user_id);

ALTER TABLE public.goals
	ENABLE ROW LEVEL SECURITY;

CREATE POLICY "select own goals"
ON goals
AS permissive
FOR SELECT
TO authenticated
USING ((SELECT auth.uid()) = user_id);

CREATE POLICY "insert own goals"
ON goals
AS permissive
FOR INSERT
TO authenticated
WITH CHECK ((SELECT auth.uid()) = user_id);

CREATE POLICY "delete own goals"
ON goals
AS permissive
FOR DELETE
TO authenticated
USING ((SELECT auth.uid()) = user_id);

CREATE POLICY "update own goals"
ON goals
AS permissive
FOR UPDATE
TO authenticated
USING ((SELECT auth.uid()) = user_id)
WITH CHECK ((SELECT auth.uid()) = user_id);

CREATE TABLE public.saving_entries (
	id uuid
	NOT NULL
	PRIMARY KEY
	DEFAULT gen_random_uuid(),
	user_id uuid
	NOT NULL
	REFERENCES auth.users (id) ON DELETE CASCADE
	DEFAULT auth.uid(),
	amount int NOT NULL,
	category text,
	memo text,
	created_at TIMESTAMP WITH TIME ZONE
	NOT NULL
	DEFAULT NOW()
);

GRANT SELECT, INSERT, DELETE, UPDATE ON TABLE saving_entries TO authenticated;

CREATE INDEX IF NOT EXISTS "idx_saving_entries_user_id" ON saving_entries USING btree (user_id);

ALTER TABLE public.saving_entries
	ENABLE ROW LEVEL SECURITY;

CREATE POLICY "select own saving_entries"
ON saving_entries
AS permissive
FOR SELECT
TO authenticated
USING ((SELECT auth.uid()) = user_id);

CREATE POLICY "insert own saving_entries"
ON saving_entries
AS permissive
FOR INSERT
TO authenticated
WITH CHECK ((SELECT auth.uid()) = user_id);

CREATE POLICY "delete own saving_entries"
ON saving_entries
AS permissive
FOR DELETE
TO authenticated
USING ((SELECT auth.uid()) = user_id);

CREATE POLICY "update own saving_entries"
ON saving_entries
AS permissive
FOR UPDATE
TO authenticated
USING ((SELECT auth.uid()) = user_id)
WITH CHECK ((SELECT auth.uid()) = user_id);
