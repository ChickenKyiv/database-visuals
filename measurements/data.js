create_table "measurements", force: :cascade do |t|
t.float "amount"
t.string "metric"
t.integer "recipe_id"
t.integer "ingredient_id"
t.datetime "created_at", null: false
t.datetime "updated_at", null: false
end

create_table "ratings", force: :cascade do |t|
t.integer "rating"
t.integer "user_id"
t.integer "recipe_id"
t.datetime "created_at", null: false
t.datetime "updated_at", null: false
end
